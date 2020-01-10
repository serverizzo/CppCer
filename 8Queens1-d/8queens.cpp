#include <iostream>
#include <cmath>
using namespace std;


struct Board{
  
  // create an array of all zeros
  int board[8] = {}; 
  int solution = 1;


  // Print the board
  void printBoard(){
    cout << "solution " << solution << endl;
    solution += 1;
    for(int i = 0; i < 8; i++){
      cout << board[i] << "  ";}
    cout << endl <<endl;
  }


  bool checkLeft(int c){
    for (int i = 0; i < c; i++){
      // Queens are on the same row
      if(/*     */){
        return false;}
    }
    return true;
  }

  bool checkDiagonalUp(int c){
    int row = board[c];
    for (int i = 1; (/*     */) && (/*     */); i++){
      if(board[c] == /*     */     ){
        return false;
      }
    }
    return true;
  }

  bool checkDiagonalDown(int c){
    int row = board[c];
    for(int i = 1; (/*     */) && (/*     */); i++){
      if (board[c] == /*     */){
        return false;
      }
    }
    return true;
  }


  bool ok(int c){
    // c represents the row of the observed queen.
    if (checkLeft(c) && checkDiagonalUp(c) && checkDiagonalDown(c)){
      return true;}
    else{
      return false;}
  }


  void solve(){
    int c = 0;
    // if we backtrack beyond the first row, we are done
    while(c > -1){

      // if we have moved beyond the last column
      if(/*     */){
        // print the board
        printBoard();
        // backtrack
        /*     */
      }

      // If we have moved beyond the board (through changing columns)
      if( /*     */ ){
        // reset queen
        /*     */
        // backtrack
        /*     */
      }

      // Check if the placed queen is ok.
      else if( ok(c) ){
        // move to next column if ok
        /*     */
      } 
      else{
        // move to next row if not ok
        /*     */
      }


    }
  }
};

int main(){

  // Note: Correct algorithm will give you 92 solutions
  Board b;
  b.solve();
  cout<< "finished";
  return 0;
}
