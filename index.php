
<!DOCTYPE html>

<?php
    session_start();
?>

<html>

<head>
    <!-- Metadata -->
    <title>Mula</title>
    <meta charset="UTF-8">
    <meta name="description" content="Save money">
    <meta name="keywords" content="Mula, Money, Saving">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <!-- Styles and scripts -->
    <link rel="stylesheet" href="frontend/style.css">
    <script type="application/javascript" src="frontend/script.js"></script>
</head>

<body>

    <div class="splash">
        <h1>MULA</h1>
        <h2>LOADING...</h2>
    </div>

    <nav>
        <a href="javascript:switchPage('DASHBOARD');">DASHBOARD</a>
        <a href="javascript:switchPage('BREAKDOWN');">BREAKDOWN</a>
        <a href="javascript:switchPage('SUPPORT');">SUPPORT</a>
    </nav>

    <main class="dashboard">

        <div id="dashboardtab">
            <div id="dashboard">
                <canvas id="canvas"></canvas>
                <div class="info">
                    <div class="insight header">THIS MONTH</div>
                    <div class="insight">TESCO: £207.34</div>
                    <div class="insight">AMAZON: £102.23</div>
                    <div class="insight">DELIVEROO: £40.98</div>
                </div>
            </div>
        </div>

        <div id="breakdowntab">
            <div id="breakdown">
                <h1>Breakdown!</h1>
            </div>
        </div>

        <div id="supporttab">
            <div id="support">
                <h1>Support!</h1>
            </div>
        </div>

    </main>

</body>

</html>
