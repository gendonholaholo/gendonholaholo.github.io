const banner_help = `
██╗  ██╗███████╗██╗     ██████╗ 
██║  ██║██╔════╝██║     ██╔══██╗
███████║█████╗  ██║     ██████╔╝
██╔══██║██╔══╝  ██║     ██╔═══╝ 
██║  ██║███████╗███████╗██║     
╚═╝  ╚═╝╚══════╝╚══════╝╚═╝                                                    
`;
const am_banner = `
░██████╗░░█████╗░░██████╗
██╔════╝░██╔══██╗██╔════╝
██║░░██╗░██║░░██║╚█████╗░
██║░░╚██╗██║░░██║░╚═══██╗
╚██████╔╝╚█████╔╝██████╔╝
░╚═════╝░░╚════╝░╚═════╝░
`;
const meme_banner = `
██████╗░░██████╗██╗███╗░░░███╗
██╔══██╗██╔════╝██║████╗░████║
██████╔╝╚█████╗░██║██╔████╔██║
██╔═══╝░░╚═══██╗██║██║╚██╔╝██║
██║░░░░░██████╔╝██║██║░╚═╝░██║
╚═╝░░░░░╚═════╝░╚═╝╚═╝░░░░░╚═╝
`;
const nsfw_banner = `
███╗   ██╗███████╗███████╗██╗    ██╗
████╗  ██║██╔════╝██╔════╝██║    ██║
██╔██╗ ██║███████╗█████╗  ██║ █╗ ██║
██║╚██╗██║╚════██║██╔══╝  ██║███╗██║
██║ ╚████║███████║██║     ╚███╔███╔╝
╚═╝  ╚═══╝╚══════╝╚═╝      ╚══╝╚══╝ 
`;
const ly_banner = `
██╗░░░██╗████████╗
╚██╗░██╔╝╚══██╔══╝
░╚████╔╝░░░░██║░░░
░░╚██╔╝░░░░░██║░░░
░░░██║░░░░░░██║░░░
░░░╚═╝░░░░░░╚═╝░░░
`;
const usr_banner = `
██╗   ██╗███████╗██████╗ 
██║   ██║██╔════╝██╔══██╗
██║   ██║███████╗██████╔╝
██║   ██║╚════██║██╔══██╗
╚██████╔╝███████║██║  ██║
 ╚═════╝ ╚══════╝╚═╝  ╚═╝
`;
const joke_banner = `
     ██╗ ██████╗ ██╗  ██╗███████╗
     ██║██╔═══██╗██║ ██╔╝██╔════╝
     ██║██║   ██║█████╔╝ █████╗  
██   ██║██║   ██║██╔═██╗ ██╔══╝  
╚█████╔╝╚██████╔╝██║  ██╗███████╗
 ╚════╝  ╚═════╝ ╚═╝  ╚═╝╚══════╝
                        
`;
const date_banner = `
██████╗  █████╗ ████████╗███████╗
██╔══██╗██╔══██╗╚══██╔══╝██╔════╝
██║  ██║███████║   ██║   █████╗  
██║  ██║██╔══██║   ██║   ██╔══╝  
██████╔╝██║  ██║   ██║   ███████╗
╚═════╝ ╚═╝  ╚═╝   ╚═╝   ╚══════╝                               
`;
const game_banner = `
 ██████╗  █████╗ ███╗   ███╗███████╗
██╔════╝ ██╔══██╗████╗ ████║██╔════╝
██║  ███╗███████║██╔████╔██║█████╗  
██║   ██║██╔══██║██║╚██╔╝██║██╔══╝  
╚██████╔╝██║  ██║██║ ╚═╝ ██║███████╗
 ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚══════╝
`

const go_url = (url) => {
  const a = document.createElement("a");
  a.href = url;
  a.target = `_blank`;
  a.click();
};

const color = (clr, str) => {
  const colors = {
    blue: "#55f",
    green: "#4d4",
    grey: "#999",
    red: "#A00",
    yellow: "#FF5",
    violet: "#a320ce",
    white: "#fff",
  };

  if (colors[clr]) {
    return "[[;" + colors[clr] + ";]" + str + "]";
  } else {
    return str;
  }
};

const windowx = (url, windowName) => {
  newwindow = window.open(
    url,
    windowName,
    "left=700,top=10,height=400,width=600"
  );
  if (window.focus) {
    newwindow.focus();
  }
  return false;
};

$("body").terminal(
  {
    help: function() {
      const help = $(`
        <span class="cmd">gos</span> => my info
        <br>
        <span class="cmd">joke</span> => use to get random joke :)
        <br>
        <span class="cmd">faforit</span> => selalu di hati
        <br>
        <span class="cmd">nsfw</span> => use to get a list of nsfw sites
        <br>
        <span class="cmd">game</span> => use to play a game
        <br>
        <span class="cmd">yt</span> => use to open a <b><i>youtube</i></b> list!!
        <br>
        <span class="cmd">ping</span> => use to check your internet connection...
        <br> 
        <span class="cmd">pwd</span> => use to check your path
        <br> 
        <span class="cmd">date</span> => use to know current date-time
        <br>
        <span class="cmd">src</span> => use to download source code of TikTok (direct ke tiktok, belum buat srcnya) 
        <br>
        <span class="cmd">cls</span> => clear or <span style="color:aqua;">(CTRL + C)</span>
        <br>
        `);
      const banner = `${color("green", banner_help)}`;
      this.echo(banner);
      this.echo(help);
    },
    gos: function() {
      const am = $(`
        <span>Id : gos(98)
        <br>
        Age : 25 years
        <br>
        Status : <span style="color:aqua">Alive</span>
        <br>
        Description : Orang jogja, kadang gabut ya buat <span style="color:aqua;">TikTok</span>.
        <br>
        Motto : Meh kepie mbien yo mbien, dirimu mung tentang <b><i>dino iki dan besok</i></b> ✌️!
        <br>
        Mail :<span style="color:aqua;"> fafaghaws@live.com</span>
        <br>
        Instagram :<span style="color:aqua;"> @shafadonia </span>
        `);
      const banner = `${color("gray", am_banner)}`;
      this.echo(banner);
      this.echo(am);
    },
    usr: function() {
      const banner = `${color("yellow", usr_banner)}`;
      this.echo(banner);
      this.read("Github Login: ", (login) => {
        const user_url = `https://api.github.com/users/` + `${login}`;
        const git_url = `https://github.com/` + `${login}`;
        fetch(user_url)
          .then((response) => response.json())
          .then((key) => {
            const data = key;
            const json = JSON.stringify(data, undefined, 4);
            const img = $(
              `<br><img src="` +
              data.avatar_url +
              `" style="height:200px;width:200px;border-radius:50%">`
            );
            this.echo(img);
            this.echo(json);
          })
          .catch(console.error());
      });
    },
    cls: function() {
      location.reload();
    },
    go: function(web) {
      if (web == "github") {
        const github = `https://github.com/cx0y`;
        go_url(github);
      } else if (web == "twitter") {
        const twitter = `https://twitter.com/cx0y_`;
        go_url(twitter);
      } else {
        this.echo(color("red", "err! try: go github"));
      }
    },
    faforit: function() {
      const banner = `${color("blue", meme_banner)}`;
      this.echo(banner);
    },
    joke: function() {
      url = `https://icanhazdadjoke.com/slack`;
      this.echo(joke_banner);
      fetch(url)
        .then((response) => response.json())
        .then((key) => {
          const data = key;
          const joke = data.attachments[0].text;
          const ret = $(`<p><b><i>` + joke + `</i></b></p>`);
          this.echo(ret);
        });
    },
    nsfw: function() {
      const banner = `${color("red", nsfw_banner)}`;
      this.echo(banner);
      this.read("Age: ", (age) => {
        if (age >= 18) {
          if (window.confirm("Open Nsfw page?")) {
            const url = `https://www.spankbang.com`;
            const nsfw = document.createElement("a");
            nsfw.href = url;
            nsfw.target = `_blank`;
            nsfw.click();
          } else {
            this.echo("exit...");
          }
        } else {
          this.echo(" ");
        }
      });
    },
    yt: function() {
      const ly_url = `https://www.youtube.com/watch?v=8O07iHsX224&ab_channel=MENDOANBOYS`;
      const banner = `${color("red", ly_banner)}`;
      this.echo(banner);
      windowx(ly_url, "w2");
      const Window = window.open("", "list", "left=730,top=200,width=600,height=400");
      Window.document.write(
        `<iframe style="border-radius:12px"
        src="https://open.spotify.com/embed/playlist/0Caz4rQRGkqAJDxzb1oYSQ?utm_source=generator"
        width="100%" height="380" frameBorder="0" allowfullscreen=""
        allow="autoplay; clipboard-write; encrypted-media; fullscreen;
        picture-in-picture" loading="lazy"></iframe>`
      );
    },
    date: function() {
      const date = new Date();
      const ret = $(`<p>` + date + `</p>`);
      this.echo(date_banner);
      this.echo(ret);
    },
    ping: function() {
      const inet = navigator.onLine;
      if (inet == true) {
        const istat = `${color("green", "I am connected to the internet...")}`;
        this.echo(istat);
      } else {
        const istato = `${color("red", "Disconnected...so sad!!!")}`;
        this.echo(istato);
      }
    },
    pwd: function() {
      const loc = location.href;
      const pwd = $(`<p>` + loc + `</p>`);
      this.echo(pwd);
    },
    src: function() {
      const url = `https://www.tiktok.com/@emohmendem`;
      go_url(url);
    },
    game: function() {
      const banner = `${color("blue", game_banner)}`;
      this.echo(banner);
      const url = `https://spacepirates.babylonjs.com`
      go_url(url)
    }
  },
  {
    greetings: `
░██╗░░░░░░░██╗██╗░░░░░░█████╗░███╗░░░███╗
░██║░░██╗░░██║██║░░░░░██╔══██╗████╗░████║
░╚██╗████╗██╔╝██║░░░░░██║░░╚═╝██╔████╔██║
░░████╔═████║░██║░░░░░██║░░██╗██║╚██╔╝██║
░░╚██╔╝░╚██╔╝░███████╗╚█████╔╝██║░╚═╝░██║
░░░╚═╝░░░╚═╝░░╚══════╝░╚════╝░╚═╝░░░░░╚═╝ 
          Ketik "help" nek bingung..

    `,
    prompt() {
      return `┌──(${color("blue", "Gos")}${color("white", "@info")})-[${color(
        "blue",
        "~/"
      )}]
└─\$ `;
    },
    keymap: {
      "CTRL+C": function(e, original) {
        location.reload();
      },
    },
  }
);

`                                                          
[] DEMON ROACH UNDERGROUND []
.______|_____________________|______.
|[C] Wail to chat :[D] Set display  |                        
|[F] Feed Ratte   :[I] Roach info   |
|[N] Roach news   :[O] Outta here...|
|[U] Fetus list   :[Y] Yo stats     |
|[Z] Nothing      :[@] Disclaimer   |
|  Check back in a day or so        |
|  for access                       |
|___________________________________|
`;
