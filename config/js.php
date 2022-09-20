<?php

$webpack = \Config::get('materia.urls.js_css');

return [
    'groups' => [
        'saml-login' => [$webpack.'js/saml-login.js'],
        'ucf-help' => [$webpack.'js/ucf-help.js']
    ]
];