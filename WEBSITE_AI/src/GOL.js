class Node{
    constructor(i,j){
      this.x=i;
      this.y=j;
      this.life=0;
    }
     show(){
      return; 
    } 
  }
  
  
  function NMarray(r ,c){
  return Array.from(Array(r), () => new Array(c));
  }
  function sumNeighbors(grid,x,y){
  
    let sum =0;
    for(let i=-1; i<2; i++){
      for (let j = -1;j<2;j++){
        let c =(x+i+gridc) % gridc;
        
        let r =(y+j+gridr) % gridr;
        
        sum+= grid[c][r];
      }
    }
    sum-=grid[x][y];
    return sum;
  }
  function newGrid(){
    
      for(let i =0; i <gridc;i++){
      for(let j =0; j<gridr;j++){
      grid[i][j]=floor(random(2));
      
      } 
    }
    
  }
  
  let grid;
  let prevGrid;
  
  let gridr;
  let gridc;
  let res =5;
  var reset = document.getElementById("Rkey").value;
  
  function setup() {
    createCanvas(600, 600);

    //frameRate(30);
    
    gridr= height / res;
    gridc= width / res;
    grid = NMarray(gridr ,gridc);
    
      //console.table(grid);  
    for(let i =0; i <gridc;i++){
      for(let j =0; j<gridr;j++){
      grid[i][j]=floor(random(2));
      } 
    }
  }
  
  function draw() {
    background(0);
   
    
    //render
    for(let i =0; i <gridc;i++){
      for(let j =0; j<gridr;j++){
        let x = i*res;
        let y = j*res;
        if(grid[i][j]){
          fill(255);
          //rect(x,y,res,res);
          circle(x,y,res);
          }
      } 
    }
    //compute generation
    
    let nextGen = NMarray(gridr,gridc);
    
    for(let i =0; i <gridc;i++){
      for(let j =0; j<gridr;j++){
   
        //get sum of neighbors in grid
        let neighbors =sumNeighbors(grid,i,j);
        let cur=grid[i][j];
        
        if(cur==0 && neighbors ==3){
          nextGen[i][j] =1;
        }else if(cur == 1 && (neighbors <2 || neighbors >3)){
          nextGen[i][j] = 0;
        }else{
          nextGen[i][j] = grid[i][j];
        }
        
      }
    }
    
    grid = nextGen;
    
  }