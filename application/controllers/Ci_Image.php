<?php
  /**
  *
  */
class Ci_Image extends CI_Controller
{

  private $CI;
  private $upload_path = "./uploads/multi-slider";
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
     $query = $this->db->get('slider');
     $this->template->set('title', 'Dashboard | Klorofil - Free Bootstrap Dashboard Template');
     $this->template->load('layout', 'contents' , 'ci-admin/image/index.php',array('data'=>$query->result_array()));
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
      else {
        // insert data on table slider
        $files = get_filenames($this->upload_path);
        $this->db->from('slider');
        $this->db->truncate();
    // we need name and size for dropzone mockfile
        foreach ($files as $file) {
          $file = array(
            'image' => $file,
            'url'     => '',
            'title'   => '',
            'alt'     => '',
            'active'  => 0
          );
          $this->db->insert('slider', $file);
        }
      }
    }
  }

  public function remove()
  {
    $file = $this->security->xss_clean($this->input->post("file"));
    if ($file && file_exists($this->upload_path . "/" . $file)) {
      unlink($this->upload_path . "/" . $file);
    }
    //return $this->db->delete('slider', array('image' => $file));
    $this->db->where('image', $file);
    $this->db->delete('slider');
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
  public function edit($id){

      if (isset($_POST['subEditMultiImage']))
      {
          $url    = $this->security->xss_clean($this->input->post('url'));
          $title  = $this->security->xss_clean($this->input->post('title'));
          $alt    = $this->security->xss_clean($this->input->post('alt'));
          $active = $this->security->xss_clean($this->input->post('active'));

          $data = array(
            'url'    => $url,
            'title'  => $title,
            'alt'    => $alt,
            'active' => $active
          );
          $this->db->where('id', $this->security->xss_clean($this->input->post('id')));
          $this->db->update('slider', $data);
      }
      else
      {
        $query = $this->db->get_where('slider',array('id'=>$id));
        $this->template->load('layout', 'contents' , 'ci-admin/image/edit-slider.php',array('csrf'=>$this->csrf,'data'=>$query->result_array()));
      }
  }
}
?>