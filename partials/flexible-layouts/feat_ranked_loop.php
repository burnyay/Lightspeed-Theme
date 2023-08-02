<? 

the_sub_field('intro');

$classes = get_the_terms( $post->ID, 'spell_classes' );
foreach ( $classes as $class ) {
    $class = $class->name;
}  

$guide_type = get_field('guide_type');

?>

<section class="feats-ranked-loop">
 <? $ratings = get_terms([ 
    'meta_key' => 'tier',
    'orderby' => 'meta_value_num', 
    'taxonomy' => 'rating',
    'hide_empty' => true,
  ]);

  // output a custom query and loop for each
  foreach ( $ratings as $rating_color ) { 

  // Set up the base query args
  $feat_query_args = array(
    'post_type' => 'feats',
    'post_per_page' => -1,
    'orderby' => 'title',
    'order' => 'asc',
    'nopaging' => true,
  );

  // Build the query
  $feat_query = new WP_Query( $feat_query_args );

  // Open the query loop
  if ( $feat_query->have_posts() ) : ?>

      <?php while ( $feat_query->have_posts() ) : $feat_query->the_post(); ?>

        <?php include(locate_template('loop-templates/content-class-feat-ranked.php')); ?>
      <?php endwhile; ?>

  <?php endif;



  } ?>
  </section>
  <? wp_reset_postdata(); ?>