<?php

namespace UcfTheme;

class UcfTheme
{
	public static function widget_redirect()
	{
		trace('WIDGET_REDIRECT CLASS CALLED FROM UCFTHEME');

		$this->theme->set_template('layouts/react');
		$this->theme->get_template()
			->set('title', 'Login')
			->set('page_type', 'login');

		Css::push_group(['login']);
		Js::push_group(['react', 'saml-login']);
	}
}
