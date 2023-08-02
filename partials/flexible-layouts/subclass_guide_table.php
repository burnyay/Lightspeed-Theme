<section>
<? $target_keyword = get_field('target_keyword'); ?>	
<h2 id="example-build"><?php if ($target_keyword): echo $target_keyword; else: the_title(); endif; ?> 5e Build Example</h2>

<? the_sub_field('subclass_guide_table_intro'); ?>

<table class="mobile-responsive">
<tbody>

<?php

// Check rows exists.
if( have_rows('subclass_guide_table_repeater') ):?>
    <? while( have_rows('subclass_guide_table_repeater') ) : the_row(); ?>
      <tr>
        <td>
          <strong><? the_sub_field('level');?></strong>
          <? the_sub_field('text', false, false); ?>
        </td>
      </tr>
    <? endwhile; ?>

<? endif;

?>

</tbody>
</table>

</section>