<div class="<?php echo $card_columns; ?>">
  <div class="card">
    <img src="<?php echo $image['sizes']['medium']; ?>" class="card-img-top">
    <div class="card-body">
      <h2 class="card-title"><?php echo $title; ?></h2>
      <p class="card-text"><?php echo $text; ?></p>
      <?php if ($card_link) { ?> <a href="<?php echo $card_link ?>" class="btn btn-primary"><?php echo $card_button_text ?></a> <?php } ?>
    </div>
  </div>
</div>