# Materia Theme for UCF

This repository contains the customized theme for the Materia server at UCF.

Visit the [Materia Documentation](https://ucfopen.github.io/Materia-Docs) for more information.

## Installing Theme into Materia

Add a custom repository to your Composer config:

`composer config repositories.ucftheme '{"type": "package", "package": { "name": "ucfopen/materia-theme-ucf", "type": "fuel-package", "version": "1.0.0", "source": { "no-api": true, "url": "https://github.com/ucfopen/Materia-Theme-UCF.git", "type": "git", "reference": "master"}}}'`

Add as a dependency:

`composer require ucfopen/materia-theme-ucf:2.0.0 --no-update`

Install the package: 

`composer update --optimize`

> Note: if this is a production deploy you may want to add `--no-dev` to the update command.

Tell Materia to use the theme:

Ensure the `THEME_PACKAGE` environment variable is set to the name of your theme. If additional paths are required, you can add them by modifying `fuel/app/config/ENVIRONMENT/theme.php` with the following:

```
<?php

return [
	'active' => 'ucf',
	'paths' => array(
		APPPATH.'themes',
		PKGPATH.'materia-theme-ucf',
	),
];
```

Additionally, as of Materia v10.0.0, it is required to add your theme package to the `FUEL_ALWAYS_LOAD_PACKAGES` environment variable:

```
FUEL_ALWAYS_LOAD_PACKAGES="orm,auth,materiaauth,ltiauth,materia-theme-ucf"
```

### Custom Theming in Materia 10.0+ 

The implementation of themes changes significantly with the introduction of Materia v10 and the incorporation of JavaScript and CSS assets back into the main repository. As such, some special considerations are required when authoring your own custom theme:

#### Routing in the theme.php class

Materia-Theme-UCF uses Event triggers in FuelPHP to return objects that describe the JS and CSS associated with a particular view. For example:

In `bootstrap.php` we register the event and callback:
```
\Event::register('before_widget_login', 'UcfTheme\\UcfTheme::widget_login_redirect');
```
Correspondingly, in the theme.php file (`ucftheme.php` for us):

```
public static function widget_login_redirect()
	{
		return [
			'css' => 'login',
			'js' => 'saml-login'
		];
	}
```

Each callback should return an array with a `js` and `css` index. The values correspond to groups that are appended to existing JS and CSS groups in the `js.php` and `css.php` configs, respectively. You can use existing groups (that are part of Materia itself) or add your own. Just make sure you include your own `config/js.php` or `config/css.php` file that includes the new groups.

Webpack is configured to search `fuel/packages` for JS assets to append to its entry object by default. Each JS asset in the theme's `src/js` directory will be appended to the manifest emitted by webpack to `public/dist`.

On the Materia side, controllers can trigger an event and confirm if a corresponding theme registers a response. Consider this example:

```
$theme_overrides = \Event::Trigger('before_widget_login', '', 'array');
	if ($theme_overrides)
	{
		$this->theme->set_template('layouts/react');
		$this->theme->get_template()
			->set('title', 'Login')
			->set('page_type', 'login');

		Css::push_group([$theme_overrides[0]['css']]);
		Js::push_group(['react', $theme_overrides[0]['js']]);
	}
```

If `$theme_overrides` is populated, we use `Css::push_group()` and `Js::push_group()` to emit the values of the `css` and `js` array properties. If `$theme_overrides` does not return a value, we should instead render the default view associated with the controller method.

#### Lang Configuration

Materia-Theme-UCF additionally leverages FuelPHP's lang class to include theme-specific strings to certain views. We use it to include support information specific to UCF. You can choose to extend this feature to include additional strings, if desired. Make sure you include the required line in `bootstrap.php`:

```
\Config::set('materia.lang_path.support', PKGPATH.'materia-theme-ucf');
```

Lang strings can be acquired by using, for example, `\Lang::get('support.sections')`. `sections` refers to the array index value in the `support.php` file in `config/lang/en`.