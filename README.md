# Package Name
An email subject score component, to determine the effectiveness of your subject line with a colorful presentation.

## Installation
Install with npm:
``` bash
npm install "Package Name"
```

## Usage
Import the component:
```bash
import {SubjectScore} from 'package name'
```
Now you can use the component as a child component:
```bash
<SubjectScore subject={value} />
```
where *value* is the **subject line** that you want to test.

## props
| Name              | Description                                                                | Default           |  Required  |
|:-----------------:|:--------------------------------------------------------------------------:|:-----------------:|:----------:|
| `subject`         | The subject line that you need to test.                                    | <empty>           | *Required* |
| `showDescription` | To display the test description or not.                                    | `false`           | *Optional* |
| `apiDelay`        | To add delay(in secsonds) before calling the api to let user finish typing.| `2secs(min value)`| *Optional* |

## Understanding the output
Output will be in the below shown format:
**Grade with dynamic progress bar** **Score of your subject** **Description**
![alt text](example.png)

Scores and Grade are genrated based on the effectiveness of your subject line, as mentioned below:
| Score   | Grade | Color                                  |
|:-------:|:-----:|:--------------------------------------:|
| 100     | A+    | $$\textcolor{#388E3C}{\text{Green}}$$  |
| 90 - 99 | A     | $$\textcolor{#388E3C}{\text{Green}}$$  |
| 80 - 90 | B     |$$\textcolor{#388E3C}{\text{Green}}$$   |
| 75 - 80 | C     | $$\textcolor{#388E3C}{\text{Green}}$$  |
| 70 - 74 | C     | $$\textcolor{#42A5F5}{\text{Blue}}$$   |
| 60 - 69 | D     | $$\textcolor{#42A5F5}{\text{Blue}}$$   |
| 40 - 59 | D     | $$\textcolor{#F57C00}{\text{Orange}}$$ |
| 20 - 39 | D     | $$\textcolor{#AB47BC}{\text{Purple}}$$ |
| 0 - 19  | D     | $$\textcolor{#D32F2F}{\text{Red}}$$    |
## License  