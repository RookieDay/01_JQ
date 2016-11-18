var length=10;
function fn(){
    console.log(this.length);
}
var obj = {
    length:5,
    method: function (fn) {

        fn(); 
        arguments[0](); 
    }
};
obj.method(fn);
obj.method(fn, 123);
//输出结果 10 1 10 2 
arguments这个伪数组对象存的传入的参数， arguments--> [fn,..,...,] ，
arguments[0]() 属于方法调用模式，this代表调用者，所以this 代表arguments ，this.length 代表实参的个数

// 函数的四种调用模式
// 1> 函数模式   this 代表window  
// 2> 方法模式
// 3> 构造器模式
// 4> 上下文模式

  function foo() {
    console.log( this );
  }

  /*
  foo();							  // 函数模式   --window
  
  var o = {fn:foo, name:'xp'};	
  o.fn();							// 方法模式   -- Object {name:'xp'}
  
  new foo();						// 构造器模式 -- foo 指的就是foo的对象
  
// 上下文模式 表示可以在调用的时候指定 this 的值是多少
// 有两种调用方法
// 1> 函数名.apply( ... );
// 2> 函数名.call( ... );

// 上下文模式由于可以指定 this 那么他可以模仿的调用有几种? 2种（方法、函数）
foo.apply();       ---- 输出 window
foo.apply( null ); ---- 输出 window


方法调用模式--->
var o = { name: 'xpp' };
foo.apply( o );  // 传入什么就相当于用什么对象调用该方法. 借用方法调用
把这个函数借给那个对象给调用用一下


// apply 的参数, 第一个参数表示指定的 this 对象, 第二个参数要求是数组
// 表示函数的参数

      
      
