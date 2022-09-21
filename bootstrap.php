<?php
Autoloader::add_classes([
	'UcfTheme\\UcfTheme'                    => __DIR__.'/classes/ucftheme.php'
]);

\Config::set('materia.lang_path.support', PKGPATH.'ucftheme');

// \Event::register('before_widget_login', 'UcfTheme\\UcfTheme::widget_login_redirect');
\Event::register('before_help_page', 'UcfTheme\\UcfTheme::help_page_redirect');