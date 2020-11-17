import React from 'react';

function Main(){
    return(
        <div className="page">
            <h2>Software Development</h2>
            <p>I have chosen programming as my college major because I <b>enjoy</b> creating programs, solutions that help people in everyday living. I always try to keep my <b>code clean</b>. When I encounter a problem I always try to <b>understand</b> it and find the most <b>optimal</b> way to solve it. Because I know that thanks to this when I face this same problem again I’ll be able to repair it quickly. </p>
            <p> <i>NOTE: By clicking some of the elements in the list browser will open a new page with a project where I used that feature/framework so you can check my skills by yourself. </i></p>

            <h3>Java</h3>
            <p className="desc"> I study Java since 2017. If you ask me it’s one of the best languages. On the internet are many articles, tutorials, and solutions for most of the problems. Mainly I use Java for making desktop app. I did projects that connect Java with <b>MySQL database</b> by PHP and also Hibernate. In my Android project, I also used Java to connect with Firebase - <b>NoSQL Database</b>. For unit testing, I mostly use <b>JUnit</b> framework. As an automation tool for Java, I always use <b>Gradle</b> that helps a lot with building projects. </p>

            <ul><span>Knowladge: </span>
                <li>Hibernate </li>
                <li>JCDB</li>     
                <li>JavaFx</li>     
                <li>Junit</li>     
                <li>MVP</li>     
                <li>Gradle</li>     
                <li>Interfaces</li>     
            </ul>

            <h3>Python</h3>
            <p className="desc">   I know python since I started writing my <b>bachelor</b> thesis in 2019. It’s a new language for me however, by this time I was using python a lot. I have learned all the basics and most of the intermediate features of python. Mainly I use python for <b>machine learning</b>, <b>data analysis</b>, and making desktop <b>GUI</b> programs and even games. You can find some of them in my Github account.</p>
            <ul><span>Knowladge: </span>
                <li> <a href="https://github.com/mrozowski/MachineLearning-jupyter/blob/main/SUV%20purchase%20prediction.ipynb" target="_blank" rel="noopener noreferrer">Seaborn for data visualisation</a> </li>
                <li> <a href="http://" target="_blank" rel="noopener noreferrer">Sklearn for machine learning</a></li>     
                <li> <a href="https://github.com/mrozowski/TaskTimer" target="_blank" rel="noopener noreferrer">PyQT for creating GUI</a></li>     
                <li> <a href="https://github.com/mrozowski/Snake" target="_blank" rel="noopener noreferrer">Arcade for making games</a></li>     
                <li>matplotlib</li>   
                <li>Pandas</li>  
                <li>Jupyter notebook</li>     
                <li>PyCharm</li>     
            </ul>

            <h3>Other languages</h3>
            <p className="desc">During high school and college, I got familiar also with other languages such as:   </p>
            <ul><span> </span>
                <li>Android</li>
                <li>C#</li>     
                <li>C++</li>         
            </ul>
       
        </div>  
    );
}

export default Main;