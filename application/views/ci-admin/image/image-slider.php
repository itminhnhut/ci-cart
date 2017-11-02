<!--
  <div id="content">
    <div id="my-dropzone" class="dropzone">
      <div class="dz-message">
        <h3>Drop files here</h3> or <strong>click</strong> to upload
      </div>
    </div>
  </div> -->
<div id="content">
 <h1>Upload multi Image</h1>
<div id="dropzone">
  <form action="/upload" class="dropzone dz-clickable dz-started" id="my-dropzone">
  <input type="hidden" name="<?=$csrf['name'];?>" value="<?=$csrf['hash'];?>" />
   <div class="dz-message needsclick">
      Drop files here or click to upload.<br>
      <span class="note needsclick">(This is just a demo dropzone. Selected files are <strong>not</strong> actually uploaded.)</span>
   </div>
  </form>
</div>
</div>