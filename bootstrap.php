<?php
Autoloader::add_classes([
	'UcfTheme\\UcfTheme'                    => __DIR__.'/classes/ucftheme.php'
]);

\Event::register('test_before_widget_login', 'UcfTheme\\UcfTheme::widget_redirect');

trace('yo check me out');