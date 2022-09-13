<?php
Autoloader::add_classes([
	'UcfTheme\\UcfTheme'                    => __DIR__.'/classes/ucftheme.php'
]);

\Event::register('before_help_page', 'UcfTheme\\UcfTheme::help_page_redirect');