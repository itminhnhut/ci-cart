<?php
  /**
  *
  */
class Ci_Image extends CI_Controller
{

  private $CI;
  private $upload_path = "./uploads";
  public  $csrf = null;
  public function __construct(){
    parent::__construct();
    $this->CI =& get_instance();
     $this->csrf = array(
        'name' => $this->security->get_csrf_token_name(),
        'hash' => $this->security->get_csrf_hash()
   );
  }

  public function index()
  {

  }
   public function slider()
  {
    $this->template->set('title', 'Dashboard | Klorofil - Free Bootstrap Dashboard Template');
    $this->template->load('layout', 'contents' , 'ci-admin/image/image-slider.php',array('csrf'=>$this->csrf));
  }
  public function upload()
  {
    if ( ! empty($_FILES))
    {
      $config["upload_path"]   = $this->upload_path;
      $config["allowed_types"] = "gif|jpg|png";
      $this->load->library('upload', $config);

      if ( ! $this->upload->do_upload("file")) {
        echo "failed to upload file(s)";
      }
    }
  }

  public function remove()
  {

    $file = $this->security->xss_clean($this->input->post("file"));
    if ($file && file_exists($this->upload_path . "/" . $file)) {
      unlink($this->upload_path . "/" . $file);
    }
  }

  public function list_files()
  {
    $files = get_filenames($this->upload_path);
    // we need name and size for dropzone mockfile
    foreach ($files as &$file) {
      $file = array(
        'name' => $file,
        'size' => filesize($this->upload_path . "/" . $file)
      );
    }

    header("Content-type: text/json");
    header("Content-type: application/json");
    echo json_encode($files);
  }
}
?>