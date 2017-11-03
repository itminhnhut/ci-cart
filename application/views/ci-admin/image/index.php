<h2>Slider Table</h2>
   <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
<table class="table">
   <thead>
      <tr>
         <th>STT</th>
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

   <tbody id="sortable">

      <?php
         //`id`, `image`, `url`, `title`, `alt`, `active`
          $i = 1;
          foreach($data as $key => $value):
      ?>
      <tr class="ui-state-default" id="item-<?php echo $value['id'] ?>">
         <td><span class="ui-icon ui-icon-arrowthick-2-n-s"></span><?php echo $i++; ?></td>
         <td>
             <img class="img-thumbnail"   src="<?php echo base_url('uploads/multi-slider/'.$value['image']) ?>" >
         </td>
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
