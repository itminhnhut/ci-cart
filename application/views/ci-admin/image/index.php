
<h2>Slider Table</h2>
<table class="table">
   <thead>
      <tr>
         <th>id</th>
         <th>Image</th>
         <th>Url</th>
         <th>Title</th>
         <th>Alt</th>
         <th>Status</th>
         <th>
            <a href="<?php echo base_url('ci-admin/upload-multi-image-slider') ?>">UpLoad Multi Image</a>
         </th>
      </tr>
   </thead>

   <tbody>

      <?php
         //`id`, `image`, `url`, `title`, `alt`, `active`
          foreach($data as $key => $value):
      ?>
      <tr>
         <td><?php echo $value['id'] ?></td>
         <td><?php echo $value['image'] ?></td>
         <td><?php echo $value['url'] ?></td>
         <td><?php echo $value['title'] ?></td>
         <td><?php echo $value['alt'] ?></td>
         <td><?php echo $value['active'] ?></td>
         <td>
             <a href="<?php echo base_url('ci-admin/multi-image/edit/'.$value['id']); ?>">
                <button type="button" class="btn btn-info">Edit</button>
             </a>
         </td>
      </tr>
   <?php endforeach; ?>
   </tbody>
</table>
