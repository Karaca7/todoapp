 getalltodo() {
    //  i will remove it this!!!
    // axios.get("http://localhost:5500/getalltodo", {}).then((data) => {
    //   this.alltodo = data;
    // });

    let alldata = await axios.get("http://localhost:5500/getalltodo");
    this.alltodo = alldata;
  },

  <button @click="getalltodo">get all data</button>
  <p>{{ alltodo }}</p>