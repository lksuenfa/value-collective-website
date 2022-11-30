<?php require "main/header.php" ?>

<section class="body">
  <?php require "main/nav.php" ?>


<section>
    <div id="frontpage" class="outer-box-frame shapes">
      <!-- <section > -->

      <!-- <img src="assets/images/vc1_front.png" width="100%" alt="" /> -->
      <h1>Value Collective is an initiative to support work that is valuable but not profitable.</h1>
      <img class="front" src="assets/images/residencies1.png" alt="">

    <a href="#s1">  <?php require "main/scrollArrow.php" ?> </a>

</div>

<section id="s1">

<!-- Full-width images with number and caption text -->

<div class="slideshow-container">

  <!-- Full-width images with number and caption text -->
  <div class="mySlides fade">
    <div class="numbertext">1 / 3</div>
    <img src="assets/images/residencies1.png" style="width:100%">
    <div class="text">Caption Text</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">2 / 3</div>
    <img src="assets/images/projects1.png" style="width:100%">
    <div class="text">Caption Two</div>
  </div>

  <div class="mySlides fade">
    <div class="numbertext">3 / 3</div>
    <img src="assets/images/residencies1.png" style="width:100%">
    <div class="text">Caption Three</div>
  </div>

  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>

</section>


<?php require  "main/footer.php" ?>
