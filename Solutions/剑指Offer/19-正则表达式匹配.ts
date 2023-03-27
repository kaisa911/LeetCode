function isMatch(s: string, p: string): boolean {
  const n=s.length, m=p.length;
  let dp = new Array(n+1).fill(0).map(_=>new Array(m+1));
  for(let i=0;i<=n;i++){
      dp[i][0]=i===0;
      for(let j=1;j<=m;j++){
          if(i==0) {
              if (p[j - 1] == "*") dp[0][j] = dp[0][j - 2];
              continue;
          }

          if(p[j-1]=="*"){
              dp[i][j]=dp[i][j-2];
              if(p[j-2]==="." || s[i-1]==p[j-2]){
                  dp[i][j]= dp[i][j] || dp[i-1][j];
              }
          }else{
              if(p[j-1]==="." || s[i-1]==p[j-1]){
                  dp[i][j]=dp[i-1][j-1];
              }
          }
      }
  }

  return dp[n][m] || false;
}
