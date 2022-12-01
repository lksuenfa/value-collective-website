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
    <img src="assets/images/projects1.png">
    <div class="text">Learn how to create a responsive slideshow with CSS and JavaScript. Learn how to create a responsive slideshow with CSS and JavaScript.</div>
  </div>

  <div class="mySlides fade">
    <img src="assets/images/projects1.png">
    <div class="text">Learn how to create a responsive slideshow with CSS and JavaScript.</div>
  </div>

  <div class="mySlides fade">
    <img src="assets/images/residencies1.png">
    <div class="text">Learn how to create a responsive slideshow with CSS and JavaScript.</div>
  </div>

  <div class="mySlides fade">
    <img src="assets/images/residencies1.png">
    <div class="text">Learn how to create a responsive slideshow with CSS and JavaScript.</div>
  </div>
  
  <div class="mySlides fade">
    <img src="assets/images/residencies1.png">
    <div class="text">Learn how to create a responsive slideshow with CSS and JavaScript.</div>
  </div>



  <!-- Next and previous buttons -->
  <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
  <a class="next" onclick="plusSlides(1)">&#10095;</a>
</div>
<br>

<!-- The dots/circles -->
<div style="text-align:center">
  <span class="dot" onclick="currentSlide(1)"></span>
  <span class="dot" onclick="currentSlide(2)"></span>
  <span class="dot" onclick="currentSlide(3)"></span>
  <span class="dot" onclick="currentSlide(4)"></span>
  <span class="dot" onclick="currentSlide(5)"></span>

</div>

</section id="s1">


<?php require  "main/footer.php" ?>
