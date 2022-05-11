<?php

// autoload_static.php @generated by Composer

namespace Composer\Autoload;

class ComposerStaticInitd66d5b06f257eac11f28f77e37ce2850
{
    public static $prefixLengthsPsr4 = array (
        'P' => 
        array (
            'PHPMailer\\PHPMailer\\' => 20,
        ),
    );

    public static $prefixDirsPsr4 = array (
        'PHPMailer\\PHPMailer\\' => 
        array (
            0 => __DIR__ . '/..' . '/phpmailer/phpmailer/src',
        ),
    );

    public static $classMap = array (
        'Composer\\InstalledVersions' => __DIR__ . '/..' . '/composer/InstalledVersions.php',
    );

    public static function getInitializer(ClassLoader $loader)
    {
        return \Closure::bind(function () use ($loader) {
            $loader->prefixLengthsPsr4 = ComposerStaticInitd66d5b06f257eac11f28f77e37ce2850::$prefixLengthsPsr4;
            $loader->prefixDirsPsr4 = ComposerStaticInitd66d5b06f257eac11f28f77e37ce2850::$prefixDirsPsr4;
            $loader->classMap = ComposerStaticInitd66d5b06f257eac11f28f77e37ce2850::$classMap;

        }, null, ClassLoader::class);
    }
}