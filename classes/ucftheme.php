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
}
