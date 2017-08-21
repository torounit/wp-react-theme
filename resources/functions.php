<?php
/**
 * Components functions and definitions.
 *
 * @package react_theme
 */

	if ( ! function_exists( 'react_theme_setup' ) ) :
	/**
	 * Sets up theme defaults and registers support for various WordPress features.
	 */
	function react_theme_setup() {

		load_theme_textdomain( 'react_theme', get_template_directory() . '/languages' );
		add_theme_support( 'automatic-feed-links' );
		add_theme_support( 'title-tag' );
		add_theme_support( 'post-thumbnails' );
		add_editor_style( get_stylesheet_uri() );

		add_image_size( 'react_theme-featured-image', 1920, 960, true );

		add_theme_support( 'html5', array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
		) );

	}
endif;
add_action( 'after_setup_theme', 'react_theme_setup' );


/**
 * Enqueue scripts and styles.
 */
function react_theme_scripts() {
	$theme   = wp_get_theme( get_template() );
	$version = $theme->get( 'Version' );
	wp_enqueue_style(  'react_theme-style', home_url( parse_url( get_theme_file_uri() . '/bundle.css' )['path'] ), null, $version );
	wp_enqueue_script( 'react_theme-bundle', home_url( parse_url( get_theme_file_uri() . '/bundle.js' )['path'] ), array(
		'jquery',
		'underscore',
	), $version, true );
}

add_action( 'wp_enqueue_scripts', 'react_theme_scripts' );


