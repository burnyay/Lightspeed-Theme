<?php
/*
** 404.php
** mk_build_main_wrapper : builds the main divisions that contains the content. Located in framework/helpers/global.php
** mk_get_view gets the parts of the pages, modules and components. Function located in framework/helpers/global.php
*/

get_header();
?>
<div class="mk-grid four-oh-four">
	<h1>Nat 1 on your Survival Check!</h1>
	<p>Looks like you can't find what you're looking for. Luckily you can roll with Advantage with this search bar:</p>
	<?php get_search_form(); ?>
	<img src="https://arcaneeye.com/wp-content/uploads/2020/02/d5c005c366794c6e6cb229788b5eadb0.jpg" height="400" style="margin: 32px 0;">
</div>
<?php
get_footer();
?>