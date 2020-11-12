var o={
  k1:'v1',
  k2:'v2',
  f1:function() {
    console.log(o.k1);
  },
  f2:function() {
    console.log(o.k2);
  }
}

o.f1();
o.f2();
