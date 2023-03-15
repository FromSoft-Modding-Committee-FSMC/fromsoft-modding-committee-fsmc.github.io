---
layout: default
title: home
---
<div class="page-heading"><h1>The Incredible FSMC Home Page</h1></div>
<div class="page-text">
    <p>
	    <script>
	        const motd = [
			    "Congratulations, you've reached here!",
			    "Welcome to sweet f!$# all!",
			    "Budget cuts mean this MOTD sucks.",
			    "Ghidra is... Ghidra.",
			    "Battenbergs are a very delicious type of cake.",
			    "If you go to the Big Mine, make sure to put X key somewhere...",
			    "Eiichi Hasagawa is an MVP.",
			    "Kraken caps! Get 'em while they're hot!",
			    "'How do you know she is a witch?'",
			    "lab313ru is an MVP.",
			    "Supplying mods for King's Field since 2021.",
                "YOU CAN'T CUT BACK ON MOTD FUNDING! YOU WILL REGRET THIS!",
                "Optimization protip: Bake your Gouraud shading into textures to avoid higher framerates",
                "KFModTool Creative Cloud - now only $499 a week!",
                "Mendzen is an MVP.",
                "What in Tarn nation?!"
            ];
			
			document.write(motd[Math.floor(motd.length * Math.random())]);
	    </script>
	</p>
</div>
<div class="page-heading"><h1>Posts:</h1>
	{% for post in site.posts %}
	<div class="page-text">
	<a href="{{ post.url }}"><h2>{{post.title}} - {{ post.date | date: "%Y/%m/%d"}}</h2></a>
		{% if post.excerpt %}
		{{ post.excerpt }}
		{% endif %}
	<hr>
	</div>
	{% endfor %}
</div>
