let arr = [
  {
    company: "Amazon",
    logo: "https://imgs.search.brave.com/jLnGz5mmWE2Xnoa5UuUxEGy-gs8sVebbw2Oi2ocRLDY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWcu/ZnJlZXBpay5jb20v/cHJlbWl1bS1waG90/by8zZC1yZW5kZXIt/YW1hem9uLWxvZ28t/ZXh0cnVkZWQtdHJh/bnNwYXJlbnQteWVs/bG93LWFjcnlsaWMt/aG92ZXJpbmctd2l0/aC1zbGlnaHQtZm9y/d2FyZC10aWx0LW5f/MTAyMDQ5NS03ODMy/ODAuanBnP3NlbXQ9/YWlzX2h5YnJpZA",
    posted: "5 days ago",
    position: "Senior UI/UX Designer",
    type: "Part-time",
    level: "Senior level",
    rate: "$120/hr",
  },
  {
    company: "Google",
    logo: "https://imgs.search.brave.com/WFUCWSTA1WQZxQ6Bj0PpSiIS0qx9cb9e-ysxkOY4rTA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvZ29vZ2xlLXMt/bG9nby8xNTAvR29v/Z2xlX0ljb25zLTA5/LTUxMi5wbmc",
    posted: "2 days ago",
    position: "Frontend Developer",
    type: "Full-time",
    level: "Mid level",
    rate: "$100/hr",
  },
  {
    company: "Meta",
    logo: "https://imgs.search.brave.com/XX2CeQuvTBoGIaeRRUzi4vrjB1_iBHdb6ZnxhWtB5uk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9mcmVl/bG9nb3BuZy5jb20v/aW1hZ2VzL2FsbF9p/bWcvMTY2NDAzNTg3/Nm5ldy1tZXRhLWxv/Z28ucG5n",
    posted: "1 week ago",
    position: "Product Designer",
    type: "Remote",
    level: "Senior level",
    rate: "$130/hr",
  },
  {
    company: "Netflix",
    logo: "https://imgs.search.brave.com/7mb-IlMRODiTrpfLjtXyypwfqwkN3xTBozYuqCbcB1k/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYnJh/bmRzLWluLWNvbG9y/cy83NTAwL05ldGZs/aXhfTG9nb19SR0It/NTEyLnBuZw",
    posted: "3 days ago",
    position: "UX Researcher",
    type: "Contract",
    level: "Entry level",
    rate: "$80/hr",
  },
  {
    company: "Adobe",
    logo: "https://imgs.search.brave.com/3tunkOZgefLK4SB2ga8l0johKjH4POHXuUAKueFT2ZU/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pLnBp/bmltZy5jb20vb3Jp/Z2luYWxzL2U1LzQ1/LzZiL2U1NDU2YmZh/NTUyZTFkZTM5YzBj/ZjBkMjQ3YTg1Mzhk/LmpwZw",
    posted: "4 days ago",
    position: "Visual Designer",
    type: "Part-time",
    level: "Mid level",
    rate: "$95/hr",
  },
  {
    company: "Spotify",
    logo: "https://imgs.search.brave.com/Qg62Pig6hyGmG0r9ijNd4AR204cDSF1DRk38KisUzNA/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvbG9nb3MtYnJh/bmRzLWluLWNvbG9y/cy81NjcvU3BvdGlm/eV9Mb2dvX1JHQl9H/cmVlbi01MTIucG5n",
    posted: "6 days ago",
    position: "Design Systems Engineer",
    type: "Full-time",
    level: "Senior level",
    rate: "$115/hr",
  },
  {
    company: "Apple",
    logo: "https://imgs.search.brave.com/s1zKoVvhOzeUhNLhxBiGXoRLTDhooKU0uP60H4bxEIk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdWJz/dGFja2Nkbi5jb20v/aW1hZ2UvZmV0Y2gv/d18xNDU2LGNfbGlt/aXQsZl9hdXRvLHFf/YXV0bzpnb29kLGZs/X3Byb2dyZXNzaXZl/OnN0ZWVwL2h0dHBz/Oi8vc3Vic3RhY2st/cG9zdC1tZWRpYS5z/My5hbWF6b25hd3Mu/Y29tL3B1YmxpYy9p/bWFnZXMvOGVkM2Q1/NDctOTRmZi00OGUx/LTlmMjAtOGMxNGE3/MDMwYTAyXzIwMDB4/MjAwMC5qcGVn",
    posted: "1 day ago",
    position: "Interaction Designer",
    type: "Hybrid",
    level: "Mid level",
    rate: "$110/hr",
  },
  {
    company: "Airbnb",
    logo: "https://imgs.search.brave.com/hJXKRjwumKM6ed0UAS9e7d7K0QNtSdfeNRaWFtCDwrE/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE2/LzEwL2FpcmJuYi1s/b2dvLTAucG5n",
    posted: "2 days ago",
    position: "Creative Director",
    type: "Remote",
    level: "Senior level",
    rate: "$140/hr",
  },
];

function heroFn() {
  let sum = "";

  arr.forEach((elem, idx) => {
    sum += `<div id="${idx}" class="cards">
      <div class="logo">
        <img src="${elem.logo}" alt="${elem.company} logo" />
        <div class="saved">
          <p class="save-text">Save</p>
          <i class="ri-bookmark-line"></i>
        </div>
      </div>

      <div class="c-name">
        <p>${elem.company}</p>
        <p2>${elem.posted}</p2>
      </div>

      <div class="info">
        <h3>${elem.position}</h3>
      </div>

      <div class="confirm">
        <p>${elem.type}</p>
        <p>${elem.level}</p>
      </div>

      <div class="line"></div>
      <div class="apply">
        <p>${elem.rate}</p>
        <button class="apply-btn">Apply Now</button>
      </div>
    </div>`;
  });

  container.innerHTML = sum;
  var btn = document.querySelectorAll(".apply-btn");
  var save = document.querySelectorAll(".saved");

  btn.forEach((e) => {
    e.addEventListener("click", function () {
      e.innerText = e.innerText === "Apply Now" ? "Applied" : "Apply Now";
    });
  });

  save.forEach((e) => {
    e.addEventListener("click", () => {
      const isSaved = e.innerText === "Save";
      e.innerHTML = isSaved
        ? ` Saved <i class="ri-bookmark-line"></i>`
        : ` Save <i class="ri-bookmark-line"></i>`;

      if (isSaved) {
        e.style.backgroundColor = "black";
        e.style.color = "white";
      } else {
        e.style.backgroundColor = "white";
        e.style.color = "black";
      }
    });
  });
}

var container = document.querySelector(".container");

heroFn();
