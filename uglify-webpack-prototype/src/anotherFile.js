const anotherFile = {};

anotherFile.square = (a) => {
  return a * a;
};

/* %Tape */
/* 
  ~>quare root
  ~>>n = 2
  ~>anotherFile.square(n) equal 4 : not worth it
  ~>anotherFile.square(n) notEqual 4
  */


module.exports = anotherFile;