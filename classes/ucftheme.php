<?php

namespace UcfTheme;

class UcfTheme
{
	public static function widget_login_redirect()
	{
		return [
			'css' => 'login',
			'js' => 'saml-login'
		];
	}

	public static function help_page_redirect()
	{
		return [
			'css' => 'help',
			'js' => 'ucf-help'
		];
	}
}
