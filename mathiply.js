window.mathiply=(function()
{

 var mathiply={
 
  add:function(a,b)
  {
    return(a+b); 
  },
  
  sub:function(a,b)
  {
  
   return(a-b);
  },
  
  mul:function(a,b)
  {
  
   return(a*b); 
  },
 
  
  div:function(a,b)
  {
  
    return(a/b);
  },
 
 
  mod:function(a,b)
  {
    return(a%b);
  },
  
  abs:function(a){
    if(a<0)
	{
	  return -a;
	}
	
	else {
	  return  a;
    }
  },
  
  pow:function(a,b)
 {
    if(b===0)
	{
	  return 1;
	}
	
	result=1;
	for(i=1; i<=b; i++)
	{
	  result*=a;
	}
	
	return result;
	
 }
 
 }
 
 return mathiply;
})();