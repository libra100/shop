// function add(id){
//     document.getElementById("status_"+id).innerText = "已加入購物車";
//     document.getElementById(id).disabled = true;
// }

firebase.initializeApp({
    apiKey: "AIzaSyCfo1lZapLv7Mzalkz624DXydtTXGJelOA",
    authDomain: "wanxin.firebaseapp.com",
    storageBucket: 'wanxin.appspot.com',
    projectId: "wanxin",
});
const db = firebase.firestore();
const storage = firebase.storage();
list("首頁");

function list(o){
    var list = document.getElementById("list");
    list.innerHTML = "";
    console.log("he")
    db.collection("公司").doc("分類").get().then((doc)=>{
        var count = doc.data().count;
    
        for(i=0;i<count;i++){
            var button = document.createElement("button");
            switch(i){
                case 0:
                    button.id = doc.data().zero;
                    button.appendChild(document.createTextNode(doc.data().zero));
                    break;
                case 1:
                    button.id = doc.data().first;
                    button.appendChild(document.createTextNode(doc.data().first));
                    break;
                case 2:
                    button.id = doc.data().second;
                    button.appendChild(document.createTextNode(doc.data().second));
                    break;
                case 3:
                    button.id = doc.data().third;
                    button.appendChild(document.createTextNode(doc.data().third));
                    break;
                case 4:
                    button.id = doc.data().forth;
                    button.appendChild(document.createTextNode(doc.data().forth));
                    break;
                case 5:
                    button.id = doc.data().fifth;
                    button.appendChild(document.createTextNode(doc.data().fifth));
                    break;
                case 6:
                    button.id = doc.data().sixth;
                    button.appendChild(document.createTextNode(doc.data().sixth));
                    break;
                case 7:
                    button.id = doc.data().seventh;
                    button.appendChild(document.createTextNode(doc.data().seventh));
                    break;
                case 8:
                    button.id = doc.data().eighth;
                    button.appendChild(document.createTextNode(doc.data().eighth));
                    break;
                case 9:
                    button.id = doc.data().nineth;
                    button.appendChild(document.createTextNode(doc.data().nineth));
                    break;
                case 10:
                    button.id = doc.data().tenth;
                    button.appendChild(document.createTextNode(doc.data().tenth));
                    break;
                case 11:
                    button.id = doc.data().eleventh;
                    button.appendChild(document.createTextNode(doc.data().eleventh));
                    break;
                case 12:
                    button.id = doc.data().twelveth;
                    button.appendChild(document.createTextNode(doc.data().twelveth));
                    break;
            }
            if(button.id == o)
                button.className = "nav-link active";
            else
                button.className = "nav-link";
            button.setAttribute('onclick','getData(this)');
            var li = document.createElement("li");
            li.className = "nav-item";
            li.appendChild(button);
            list.appendChild(li);
        }
    }).catch((e)=>{
        // console.log(e);
    })
}

// getData();
function getData(o){
    list(o.id);
    var context = document.getElementById("context");
    context.innerHTML = "";

    db.collection(o.id).get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {
            var span = document.createElement("span");
            span.appendChild(document.createTextNode(doc.data().price));
            var a = document.createElement("a")
            a.appendChild(span);

            var text = document.createElement("h5");
            text.className = "card-title";
            text.appendChild(document.createTextNode(doc.data().name));
            var btn = document.createElement("button");
            btn.appendChild(document.createTextNode("加入購物車"));
            btn.type = "button";
            btn.className = "btn btn-primary";

            var body = document.createElement("div");
            body.className = "card-body";
            body.appendChild(text);
            body.appendChild(btn);

            //card
            var card = document.createElement("div");
            card.className = "card";
            card.appendChild(a);
            card.appendChild(body);

            context.appendChild(card);

            let stroageRef = firebase.storage().ref(o.id);
            stroageRef.child(doc.id).getDownloadURL().then(url=>{
                var img = document.createElement("img");
                img.src = url;
                img.className = "card-img-top"
                a.appendChild(img);
                
            }).catch(e=>{
                // console.log(e);
            });
        });
    });
}