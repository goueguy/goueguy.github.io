
        document.querySelector("#main").style.display = 'none';
        document.getElementById("load").classList.add("loader");
        setTimeout(() => {
            document.getElementById("load").classList.remove("loader");
            document.querySelector("#main").style.display = 'block';
        }, 4000);