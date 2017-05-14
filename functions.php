<?php
/**
 * Components functions and definitions.
 *
 * @package leact
 */

	if ( ! function_exists( 'leact_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function leact_setup() {

		load_theme_textdomain( 'leact', get_template_directory() . '/languages' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_editor_style( get_stylesheet_uri() );

		add_image_size( 'leact-featured-image', 1920, 960, true );

		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

	}
endif;
add_action( 'after_setup_theme', 'leact_setup' );


/**
 * Enqueue scripts and styles.
 */
function leact_scripts() {
	$theme   = wp_get_theme( get_template() );
	$version = $theme->get( 'Version' );
	wp_enqueue_style(  'leact-style', get_template_directory_uri() . '/bundle.css', null, $version );
	wp_enqueue_script( 'leact-bundle', get_template_directory_uri() . '/bundle.js', array(
		'jquery',
		'underscore',
	), $version, true );

}

add_action( 'wp_enqueue_scripts', 'leact_scripts' );


