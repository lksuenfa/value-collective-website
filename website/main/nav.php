<!-- menu -->

<nav>

    <section id="navHeader">
        <a href="index.php">
            <img id="logo" src="assets/logo/Logo_black.svg" alt="Value Collective logo">
        </a>

        <button id="openBtn" class="open">MENU</button>
    </section>


    <div id="menuMobile" class="overlay">

        <section class="overlayHeader">
            <a href="index.php">
                <img class="overlayLogo" src="assets/logo/Logo_black.svg" alt="Value Collective logo">
            </a>

            <a id="closeBtn" class="close"><img src="assets/icons/close_icon.svg" alt="close icon"></a>
        </section>

        <div id="searchBar" class="search-container lined">
            <form action="">
                <input type="text" placeholder="search..." name="search">
                <button type="submit"><img id="searchIcon" src="assets/icons/search.svg" alt="search icon"></button>
            </form>
        </div>


        <div id="mainMenu">
            <a class="lined hover green" href="about.php">About</a>
            <a class="lined hover pink" href="residencies.php">Residencies</a>
            <a class="lined hover yellow" href="projects.php">Projects</a>
            <a class="lined last hover aqua" href="events.php">last link or it fucks shit up</a>
        </div>

        <div id="eventMenu">
          <a href="events.php">
          <div class="eventTitle">
            <h3>Upcoming Events</h3>
          </div>
          <div class="eventrow">
            <div class="date">
    03.JAN
            </div>
            <div class="eventname">
    Event Name Here
            </div>
          </div>
          <div class="eventrow">
            <div class="date">
    21FEB
            </div>
            <div class="eventname">
    Event Name Here
            </div>
          </div>
        <div class="eventrow">
          <div class="date">
    25MAR
            </div>
            <div class="eventname">
    Event Name Here
            </div>
          </div>
          </a>
        </div>


        <div id="overlayFooter">
            <a href=""><img src="assets/icons/fb.svg" alt="facebook logo"></a>
            <a href="mailto: abc@example.com"> <img src="assets/icons/email.png" alt="email logo"></a>
        </div>

        <section class="footerSide">
            <?php require  "main/footerNav.php" ?>
        </section>
    </div>


</nav>
