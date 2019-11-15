1. 两个标签的嵌套

   内部透明圆环

   

2. 使用伪元素，before／after

   ```
   <div class="element2"></div>
   .element2{
               width: 200px;
               height: 200px;
               background-color: lightpink;
               border-radius: 50%;
           }
           .element2:after{
               content: "";
               display: block;
               width: 100px;
               height: 100px;
               border-radius: 50%;
               background-color: #009966;
               position: relative;
               top: 50px;
               left: 50px;
           }
   ```

   伪元素设置圆环

   

3. 使用border

   border设置宽度，实现圆环效果

   

4. 使用border-shadow

   ```
   <div class="element4"></div>
   .element4{
               width: 100px;
               height: 100px;
               background-color: #009966;
               border-radius: 50%;
               box-shadow: 0 0 0 50px lightpink ;
               margin: auto;
           }
   
   <div class="element5">
   .element5{
             width: 200px;
             height: 200px;
             background-color: #009966;
             border-radius: 50%;
             box-shadow: 0 0 0 50px lightpink inset;
             margin: auto;
         }
   ```

   

    通过模糊程度实现圆环效果

   

5. 使用radial-gradient

   ```
   <div class="element6"></div>
   .element6{
               width: 200px;
               height: 200px;
               border-radius: 50%;
               background: -webkit-radial-gradient( circle closest-side,#009966 50%,lightpink 50%);
           }
   ```

   辐射渐变，中心为透明

   