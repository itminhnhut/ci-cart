<?php
defined('BASEPATH') OR exit('No direct script access allowed');

/*
| -------------------------------------------------------------------------
| URI ROUTING
| -------------------------------------------------------------------------
| This file lets you re-map URI requests to specific controller functions.
|
| Typically there is a one-to-one relationship between a URL string
| and its corresponding controller class/method. The segments in a
| URL normally follow this pattern:
|
|  example.com/class/method/id/
|
| In some instances, however, you may want to remap this relationship
| so that a different class/function is called than the one
| corresponding to the URL.
|
| Please see the user guide for complete details:
|
|  https://codeigniter.com/user_guide/general/routing.html
|
| -------------------------------------------------------------------------
| RESERVED ROUTES
| -------------------------------------------------------------------------
|
| There are three reserved routes:
|
|  $route['default_controller'] = 'welcome';
|
| This route indicates which controller class should be loaded if the
| URI contains no data. In the above example, the "welcome" class
| would be loaded.
|
|  $route['404_override'] = 'errors/page_missing';
|
| This route will tell the Router which controller/method to use if those
| provided in the URL cannot be matched to a valid route.
|
|  $route['translate_uri_dashes'] = FALSE;
|
| This is not exactly a route, but allows you to automatically route
| controller and method names that contain dashes. '-' isn't a valid
| class or method name character, so it requires translation.
| When you set this option to TRUE, it will replace ALL dashes in the
| controller and method URI segments.
|
| Examples: my-controller/index  -> my_controller/index
|     my-controller/my-method -> my_controller/my_method
*/
$route['default_controller']    = 'welcome';
$route['404_override'] = '';
$route['translate_uri_dashes']  = FALSE;
$route['login/getLogin']        = 'login/getLogin';
$route['ci-admin']              = 'ci_Admin';
$route['login']                 = 'login';
$route['login/logout']          = 'login/logout';
/**
 * slider image
 */
$route['ci-admin/image-slider']               = 'ci_Image/index';
$route['ci-admin/upload-multi-image-slider']  = 'ci_image/slider';
$route['ci-admin/upload']                     = 'ci_Image/upload';
$route['ci-admin/list_files']                 = 'ci_Image/list_files';
$route['ci-admin/remove']                     = 'ci_Image/remove';
$route['ci-admin/order-image']                = 'ci_image/orderImage';
$route['ci-admin/multi-image/edit/(:num)']    = 'ci_image/edit/$1';
/**
 * banner image
 */
$route['ci-admin/image-banner']                   = 'ci_banner_image/index';
$route['ci-admin/upload-multi-image-banner']      = 'ci_banner_image/banner';
$route['ci-admin/banner/upload']                  = 'ci_banner_image/upload';
$route['ci-admin/banner/remove']                  = 'ci_banner_image/remove';
$route['ci-admin/banner/list_files']              = 'ci_banner_image/list_files';
$route['ci-admin/banner/order-banner']            = 'ci_banner_image/orderBanner';
$route['ci-admin/multi-banner/edit/(:num)']       = 'ci_banner_image/edit/$1';
/**
 * banner footer
 */
$route['ci-admin/image-footer']                 = 'ci_footer_image/index';
$route['ci-admin/upload-multi-image-footer']    = 'ci_footer_image/footer';
$route['ci-admin/footer/upload']                = 'ci_footer_image/upload';
$route['ci-admin/footer/remove']                = 'ci_footer_image/remove';
$route['ci-admin/footer/list_files']            = 'ci_footer_image/list_files';
$route['ci-admin/footer/order-footer']          = 'ci_footer_image/orderFooter';
$route['ci-admin/multi-footer/edit/(:num)']     = 'ci_footer_image/edit/$1';
/**
 * banner footer
 */
$route['ci-admin/menu']               = 'ci_menu/index';
$route['ci-admin/menu/create']        = 'ci_menu/create';
$route['ci-admin/menu/order']         = 'ci_menu/order';
$route['ci-admin/menu/order-menu']    = 'ci_menu/orderMenu';
$route['ci-admin/menu/data-menu']     = 'ci_menu/dataMenu';
$route['ci-admin/menu/edit/(:num)']   = 'ci_menu/edit/$1';
$route['ci-admin/menu/delete']        = 'ci_menu/delete';
$route['ci-admin/menu/image/(:num)']        = 'ci_menu/menuImage/$1';

$route['ci-admin/menu/upload']                = 'ci_menu/upload';
$route['ci-admin/menu/remove']                = 'ci_menu/remove';
$route['ci-admin/menu/list_files']            = 'ci_menu/list_files';
