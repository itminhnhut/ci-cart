<?php
   /**
   *
   */
   class Ci_Product extends CI_Controller
   {
      private $CI;
      public  $csrf = null;

      function __construct()
      {
         parent::__construct();
         $this->CI =& get_instance();
         $this->csrf = array(
            'name' => $this->security->get_csrf_token_name(),
            'hash' => $this->security->get_csrf_hash()
         );
          $this->template->add_js('assets/js/slug.js');
      }


      public function index()
      {
         $breadcrum = array(
            'br1' => array('name' => 'Home', 'url'=>'ci-admin'),
            'br2' => array('name' => 'Product'),
         );
         $this->template->breadcrum($breadcrum);
         $this->template->load('layout', 'contents' , 'ci-admin/product/index.php',array('csrf'=>$this->csrf));
      }

      public function create()
      {
          $breadcrum = array(
            'br1' => array('name' => 'Home', 'url'=>'ci-admin'),
            'br2' => array('name' => 'Product','url'=>'ci-admin/product'),
            'br2' => array('name' => 'Create Product'),
         );
         $this->template->breadcrum($breadcrum);
         $this->template->add_js('ckeditor/ckeditor.js');
         $this->template->add_js('assets/js/ckeditor.js');

         $data = $this->load->model('MenuMulti');
         $data = $this->MenuMulti->get_categories();
         $array = json_decode(json_encode($data),TRUE);

         $this->template->add_js('assets/js/ajax-menu-product.js');
         $this->template->load('layout', 'contents' , 'ci-admin/product/create.php',array('dataMenu'=>$array,'csrf'=>$this->csrf));
      }

      public function ajaxMenu(){
          $da = $this->input->post('idloai');
          $this->load->helper('menu_product');
          $a = MenuProduct($da);
          echo $a;
      }
   }
?>