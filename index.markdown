---
layout: default
title: home
---
<div class="page-heading"><h1>The Incredible FSMC Home Page.</h1></div>
<div class="page-text">
    <p>
	    <script>
	        var motd = new Array();
			motd[0]  = "Congratulations, you've reached here!";
			motd[1]  = "Welcome to sweet f!$# all!";
			motd[2]  = "Budget cuts mean this MOTD sucks.";
			motd[3]  = "Ghidra is... Ghidra.";
			motd[4]  = "Battenbergs are a very delicious type of cake.";
			motd[5]  = "If you go to the Big Mine, make sure to put X key somewhere...";
			motd[6]  = "Eiichi Hasagawa is an MVP.";
			motd[7]  = "Kraken caps! Get 'em while they're hot!";
			motd[8]  = "'How do you know she is a witch?'";
			motd[9]  = "lab313ru is an MVP."
			motd[10] = "Supplying mods for King's Field since 2021.";
			
			document.write(motd[Math.floor(motd.length * Math.random())]);
	    </script>
	</p>
</div>
<div class="page-heading"><h1>Posts:</h1></div>
{% for post in site.posts %}
<div class="page-post">
	<a href="{{ post.url }}"><h1>{{post.title}} - {{ post.date | date: "%Y/%m/%d"}}</h1>
	</a>
	<p></p>
	{% if post.excerpt %}
	{{ post.excerpt }}
	{% endif %}
</div>
{% endfor %}