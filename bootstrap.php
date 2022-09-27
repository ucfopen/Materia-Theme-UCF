<?php
Autoloader::add_classes([
	'UcfTheme\\UcfTheme'                    => __DIR__.'/classes/ucftheme.php'
]);

\Config::set('materia.lang_path.support', PKGPATH.'materia-theme-ucf');

\Event::register('before_help_page', 'UcfTheme\\UcfTheme::help_page_redirect');