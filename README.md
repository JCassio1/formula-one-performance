# formula-one-performance

## ❓ Problem statement

For each of the constructors in the 2023 F1 season, which circuit throughout history have they performed best at?

<p align="center">
  <img src="https://github.com/JCassio1/formula-one-performance/blob/main/src/assets/planning/application_screenshot.png" />
</p>

## 🧠 Assumptions

- Best Performance: I have defined 'best performance' as when a Formula 1 constructor secures a 1st place finish or achieves its highest position during a race. In the event of multiple instances of the same finishing position, the use of the lowest lap times metric is prioritised to determine their best result.

- Historical Context: These assumptions apply consistently across all historical data, regardless of the specific year in question.

## Wireframe

<p align="center">
  <img src="https://github.com/JCassio1/formula-one-performance/blob/main/src/assets/planning/F1-project-wireframe.png" />
</p>

## 🚀 Tech

<div>
<img src="https://cdn-images-1.medium.com/v2/resize:fit:1200/1*DN7ToydkJZEdVaJVK_Nhvw.png" width="5%" height="5%"> Javascript
<img src="https://cdn.freebiesupply.com/logos/large/2x/react-1-logo-png-transparent.png" width="5%" height="5%"> React
<img src="https://getbootstrap.com/docs/5.0/assets/brand/bootstrap-social-logo.png" width="5%" height="5%"> React Bootstrap
<img src="https://blog.openreplay.com/images/fetching-and-updating-data-with-react-query/images/hero.png" width="5%" height="5%"> React Query
<img src="https://i.pinimg.com/originals/33/61/e7/3361e7c35a120457ebe533140a62f820.jpg" width="5%" height="5%"> react-content-loader
</div>
<img src="https://seeklogo.com/images/V/vitest-logo-9ADDA575A5-seeklogo.com.png" width="5%" height="5%"> Vitest
</div>

## ✋🏻 Pre-requisites

- [Terminal](https://www.youtube.com/watch?v=5XgBd6rjuDQ)

## 🔥 Install & Execute locally

1. Clone the repository;
2. Open repository;
3. Run NPM Install
4. Click on localhost web url

## 🛣 Possible solutions

| Solutions                                                           |                                                                                                                                                                              Pros |                                                 Cons                                                  |
| :------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------: | :---------------------------------------------------------------------------------------------------: |
| Making multiple API calls to get data for constructor for all years |                                                                                                              Fetches all data at once, reducing the need for subsequent requests. | Extremely inefficient, which can significantly impact user experience, especially for large datasets. |
| Segmet API call according to user request                           | Offers extremely fast and responsive data retrieval, minimizes API calls, reduces server load and resource consumption, and allows users to precisely specify the data they need. |                      Users will not be able to view data spanning multiple years                      |

Note: At present, one of the above solutions has been selected for implementation. However, it's worth noting that both solutions remain viable options for the future. The chosen approach aligns with current user needs and technical constraints.

## 🛣 Choosen solution

The Segmet API call according to user request approach was chosen as it aligns closely with the goal of providing an efficient and user-centric experience.

- Speed and Efficiency: This approach allows us to deliver data to our users with lightning-fast response times. By tailoring API calls to precisely match user requests, we minimize unnecessary data transfer, resulting in quicker access to the information users need.

- Resource Optimization: With minimal API calls, we reduce server load and resource consumption. This not only ensures smoother performance but also optimizes resource utilization, making our application more sustainable in the long term.

- Yearly request: Users can request data exactly as they need it - constructor per year. This approach empowers users to tailor their query to suit their unique requirements.

While this approach does have the limitation of not allowing users to view data spanning multiple years in a single request, it offers the advantages of speed and efficiency that are vital for a seamless user experience.

<p align="center">
  <img src="https://github.com/JCassio1/formula-one-performance/blob/main/src/assets/planning/F1-project-diagram.png" />
</p>

## 🧪 Testing

Testing is crucial for maintaining code quality, preventing issues, and ensuring the reliability of your application. In this context, the testing approach specifically verifies that the application consistently fetches data, with a focus on retrieving the Formula One 2023 constructor list.

Made with ❤️ by Joselson
