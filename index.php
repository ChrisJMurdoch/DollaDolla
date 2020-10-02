
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

    <nav>
        <a href="javascript:switchPage('DASHBOARD');">DASHBOARD</a>
        <a href="javascript:switchPage('BREAKDOWN');">BREAKDOWN</a>
        <a href="javascript:switchPage('SUPPORT');">SUPPORT</a>
    </nav>

    <main class="dashboard">

        <div id="dashboardtab">
            <div id="dashboard">
                <canvas></canvas>
                <div class="info">
                    <h1>Graph info here!</h1>
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
