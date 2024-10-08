import React from 'react';
import Step from './Step';

const steps = [
  {
    title: 'Understanding the Feynman Technique and the Rubik\'s Cube from First Principles',
    description: `
### The Feynman Technique Simplified

The Feynman Technique involves four key steps to master any concept:

1. **Teach It to a Child**: Explain the idea using simple language, as if teaching someone unfamiliar with the topic.
2. **Identify Gaps in Understanding**: Recognize any areas where you struggle to explain clearly.
3. **Review and Simplify**: Go back to the source material to fill in your knowledge gaps.
4. **Organize and Convey**: Simplify your explanations and use analogies to solidify your understanding.

### The Rubik's Cube Fundamentals

To truly grasp the Rubik's Cube, let's break it down:

- **Structure**: It's a 3x3x3 cube composed of smaller cubes called "cubies."
- **Types of Pieces**:
  - **Center Pieces**: Six fixed pieces in the middle of each face; they define the color of each face and do not move relative to each other.
  - **Edge Pieces**: Twelve pieces located between the corners, each with two colors.
  - **Corner Pieces**: Eight pieces located at the corners, each with three colors.

### Visualization

Imagine the cube as a complex system where each move affects multiple pieces. Visualize each layer as a slice that can rotate independently. The challenge is to manipulate these layers to achieve the desired outcome without disrupting the progress you've already made.

### Importance of Fundamental Understanding

By understanding the cube's mechanics:

- **Predict Movements**: You'll anticipate how each move affects the pieces.
- **Problem-Solving Skills**: Develop strategies to handle any configuration.
- **Adaptability**: Create your own solutions and adapt to new puzzles.

**Remember**: Skipping foundational knowledge may lead to confusion later. Embrace the basics to build confidence and mastery.
    `,
  },
  {
    title: 'Step 1: Solving the First Layer Cross',
    description: `
**Objective**: Create a cross on the bottom face (we'll use white), ensuring that each white edge piece aligns with the corresponding center pieces on adjacent sides.

### Understanding the Task

You're not just forming a white cross; you're ensuring that the adjacent colors of the white edge pieces match the center colors of the other faces. This sets a solid foundation for the rest of the solve.

### Visualization

- **Imagine**: The white face is the "floor" of a building.
- **Edges as Beams**: The white edge pieces are beams connecting the floor to the walls (side faces).
- **Alignment**: Each beam must connect to the correct wall (matching center color).

### Step-by-Step Process

1. **Hold the Cube Properly**:
   - White center piece on the bottom.
   - Yellow center piece on the top.

2. **Locate All White Edge Pieces**:
   - There are four of them.
   - They can be on any face.

3. **Bring an Edge Piece to the Top Layer**:
   - If a white edge is on the middle layer, turn the side faces to bring it to the top.
   - **Example**: If the white-red edge is on the middle layer between the red and blue centers, rotate the front face to move it to the top layer.

4. **Align the Edge Piece with the Correct Center**:
   - Rotate the top layer so that the non-white color of the edge piece matches its center.
   - **Example**: Align the red part of the white-red edge piece with the red center.

5. **Move the Edge Piece to the Bottom Layer**:
   - Perform a 180-degree turn of the face where the edge piece is located.
   - This brings the white edge piece down to form part of the white cross.

6. **Repeat for All White Edge Pieces**:
   - One at a time, ensuring proper alignment.

### Key Insights

- **Layer Preservation**: By always bringing pieces to the top layer first, you minimize disruption to the solved parts.
- **Understanding Movements**: Visualize how turning one face affects the position of edge pieces.

### Tips

- **Take Your Time**: Rushing can lead to mistakes that scramble solved pieces.
- **Practice Visualization**: Before making a move, predict where the pieces will go.

By the end of this step, you should see a white cross on the bottom face, with each edge piece's side color matching the center color of the adjacent face.
    `,
  },
  {
    title: 'Step 2: Solving the First Layer Corners',
    description: `
**Objective**: Place all four white corner pieces into their correct positions, completing the first layer both in color and position.

### Understanding the Task

Each corner piece must be between three center pieces that match its three colors. Correct placement is crucial for the subsequent layers.

### Visualization

- **Corners as Pillars**: Think of corner pieces as pillars that support the edges.
- **Color Matching**: Each pillar must connect the floor (white face) to the correct two walls (side faces).

### Step-by-Step Process

1. **Locate a White Corner Piece**:
   - It may be on the top layer, middle layer, or even in the correct spot but incorrectly oriented.

2. **Position the Corner Below Its Target Location**:
   - Rotate the cube so that the corner piece is on the top layer above where it needs to go.
   - **Example**: A corner with white, red, and blue stickers should be between the white, red, and blue centers.

3. **Determine the Correct Algorithm**:
   - **Right-Hand Algorithm** (for corners on the right):
     - **Sequence**: R' D' R D
   - **Left-Hand Algorithm** (for corners on the left):
     - **Sequence**: L D L' D'

4. **Insert the Corner Piece**:
   - Apply the appropriate algorithm repeatedly until the corner piece is correctly placed and oriented.
   - **Visualization**: Each application of the algorithm moves the corner piece in a controlled cycle.

5. **Repeat for All Corners**:
   - Focus on one corner at a time to maintain control over the cube.

### Key Insights

- **Algorithm Purpose**: These algorithms rotate the corner piece in place without disrupting the already solved edges.
- **Controlled Movements**: Repetition is normal; each application adjusts the corner's orientation incrementally.

### Tips

- **Maintain Orientation**: Always keep the white face on the bottom to avoid confusion.
- **Observe the Effect**: Watch how the corner piece moves with each turn to build intuition.

After this step, the entire first layer (white face and the sides adjacent to it) should be complete, forming a solid foundation for the middle layer.
    `,
  },
  {
    title: 'Step 3: Solving the Second Layer Edges',
    description: `
**Objective**: Correctly position the four edge pieces in the middle layer that do not contain yellow stickers.

### Understanding the Task

You're now focusing on the middle layer, placing edge pieces between the correct center pieces without disturbing the solved first layer.

### Visualization

- **Middle Layer as a Ring**: Imagine the middle layer as a belt wrapping around the cube.
- **Edges as Links**: Each edge piece is a link connecting two center pieces.

### Step-by-Step Process

1. **Flip the Cube Over**:
   - Turn the cube so the white face is now on the bottom and the yellow face is on top.

2. **Identify Edge Pieces Without Yellow**:
   - Look at the top layer for edge pieces that do not have yellow stickers.
   - These are the pieces you need to place in the middle layer.

3. **Align the Edge Piece with the Correct Center**:
   - Rotate the top layer to align the front color of the edge piece with the matching center color on the front face.
   - **Example**: If the edge piece is red-green, and the red sticker is facing you, align it with the red center.

4. **Determine Where the Edge Needs to Go**:
   - Look at the top color of the edge piece to decide if it needs to go to the left or right.
   - **Left**: If the top color matches the center on the left face.
   - **Right**: If it matches the center on the right face.

5. **Apply the Appropriate Algorithm**:
   - **For Edges Moving to the Right**:
     - **Algorithm**: U R U' R' U' F' U F
   - **For Edges Moving to the Left**:
     - **Algorithm**: U' L' U L U F U' F'

6. **Execute the Algorithm**:
   - This sequence moves the edge piece from the top layer into the middle layer in the correct position.

7. **Repeat for All Middle Layer Edges**:
   - Continue the process for each edge piece without yellow.

### Key Insights

- **Preservation of Solved Pieces**: The algorithms are designed to move the necessary pieces without altering the solved first layer.
- **Understanding Movements**: Visualize how each move shifts the edge piece into place while bringing an unwanted edge back to the top layer.

### Tips

- **Edge Replacement**: If no suitable edge pieces are on the top layer, you may need to replace an incorrectly placed middle layer edge with a top-layer edge to free up the correct piece.
- **Practice Algorithms Slowly**: This helps in understanding the impact of each move.

After completing this step, both the first and second layers should be fully solved, leaving only the top layer to complete.
    `,
  },
  {
    title: 'Step 4: Creating the Yellow Cross on the Top Face',
    description: `
**Objective**: Form a yellow cross on the top face, setting the stage for solving the final layer.

### Understanding the Task

At this point, the top face (yellow) may show different patterns:

- **Dot**: Only the yellow center piece is visible.
- **"L" Shape**: Two yellow edge pieces form a right angle.
- **Line**: Two yellow edge pieces form a straight line.
- **Cross**: All four yellow edge pieces are in place.

Your goal is to transform whatever pattern you have into the yellow cross.

### Visualization

- **Patterns as Stages**: Each pattern represents a stage towards forming the cross.
- **Edge Flipping**: You're flipping the yellow edge pieces to face upward.

### Step-by-Step Process

1. **Identify the Current Pattern**:
   - Determine whether you have a dot, "L" shape, or line.

2. **Position the Cube Correctly**:
   - **"L" Shape**: Hold the cube so the "L" is at the front-left corner (imagine it as a backward "L").
   - **Line**: Hold the cube so the line is horizontal.
   - **Dot**: Orientation doesn't matter.

3. **Apply the Algorithm**:
   - **Algorithm**: F R U R' U' F'
   - This sequence flips the edge pieces without moving their positions.

4. **Repeat as Necessary**:
   - After the first application, reassess the top face.
   - You may need to apply the algorithm multiple times to achieve the cross.

### Key Insights

- **Understanding the Algorithm**:
  - **F R U R' U' F'** works by temporarily disrupting the front face to manipulate the top edges and then restoring the front face.
- **Preservation of Lower Layers**:
  - The algorithm is designed to affect only the top layer, keeping the first two layers intact.

### Tips

- **Visualization of Moves**: Imagine the yellow edge pieces flipping up to form the cross.
- **Consistency**: Keep the yellow face on top throughout this step to maintain orientation.

By the end of this step, you should see a yellow cross on the top face, ready for the final stages of solving the cube.
    `,
  },
  {
    title: 'Step 5: Aligning the Yellow Cross with Side Colors',
    description: `
**Objective**: Position the yellow cross's edge pieces so that their side colors match the center colors of the adjacent faces.

### Understanding the Task

While the yellow cross is formed on the top face, the edge pieces might not be in their correct positions relative to the side centers. Your goal is to permute these edge pieces without altering the cross or the solved layers below.

### Visualization

- **Edge Cycling**: Think of the edge pieces moving around the top layer like cars on a roundabout, shifting positions without changing orientation.

### Step-by-Step Process

1. **Check the Alignment of Edge Pieces**:
   - Look at the sides of the top layer to see how many edge pieces match the center colors of the adjacent faces.

2. **Possible Scenarios**:
   - **No Edges Match**: None of the edge pieces align with the side centers.
   - **Two Adjacent Edges Match**: Two edge pieces next to each other are correctly aligned.
   - **Two Opposite Edges Match**: Two edge pieces across from each other are correctly aligned.

3. **Position the Cube for the Algorithm**:
   - If two adjacent edges match, hold the cube so one matching edge is facing you (front face) and the other is on the right.
   - If no edges match, you can hold the cube in any orientation.

4. **Apply the Algorithm**:
   - **Algorithm**: R U R' U R U2 R' U
   - This sequence cycles three edge pieces while keeping the cross intact.

5. **Reassess and Repeat if Necessary**:
   - After applying the algorithm, check the alignment again.
   - You may need to perform the algorithm more than once.

### Key Insights

- **Algorithm Mechanics**:
  - The algorithm swaps the positions of the edge pieces without flipping them.
- **Pattern Recognition**:
  - Identifying which edges are correctly placed helps in deciding how to position the cube before applying the algorithm.

### Tips

- **Stay Oriented**: Always keep the yellow face on top to maintain consistency.
- **Patience**: It's normal for this step to require multiple attempts.

By the end of this step, all edge pieces of the yellow cross should align with the corresponding center colors on the sides, setting the stage for positioning the corners.
    `,
  },
  {
    title: 'Step 6: Positioning the Yellow Corners Correctly',
    description: `
**Objective**: Place the yellow corner pieces in their correct positions on the top layer, regardless of their orientation.

### Understanding the Task

The corners need to be moved to their correct locations, where their three colors match the center colors of the adjacent faces. At this stage, we're only concerned with their positions, not the direction they're facing.

### Visualization

- **Corner Swapping**: Visualize the corners swapping places around the top layer like dancers changing positions in a choreography.

### Step-by-Step Process

1. **Identify Correctly Placed Corners**:
   - Look for corners where all three colors match the adjacent center colors. They might be incorrectly oriented, which is acceptable for now.

2. **Possible Scenarios**:
   - **No Corners Correct**: None of the corners are in the correct position.
   - **One Corner Correct**: One corner is in the correct position.

3. **Position the Cube for the Algorithm**:
   - If one corner is correct, hold the cube so that this corner is at the front-right-top position.
   - If no corners are correct, you can hold the cube in any orientation.

4. **Apply the Algorithm**:
   - **Algorithm**: U R U' L' U R' U' L
   - This sequence cycles the positions of the three other corners while keeping the correctly placed corner in position.

5. **Reassess and Repeat if Necessary**:
   - After applying the algorithm, check if all corners are now in their correct positions.
   - If not, reposition the cube and repeat the algorithm.

### Key Insights

- **Algorithm Functionality**:
  - The algorithm swaps the positions of the three misaligned corners without affecting their orientation.
- **Strategic Positioning**:
  - Holding the cube correctly is crucial to ensure the algorithm has the desired effect.

### Tips

- **Maintain Consistency**: Keep the yellow face on top throughout this process.
- **Observation Skills**: Carefully note the movement of each corner to understand the algorithm's impact.

By completing this step, all yellow corner pieces should be in their correct positions, with only their orientation left to fix.
    `,
  },
  {
    title: 'Step 7: Orienting the Yellow Corners to Complete the Cube',
    description: `
**Objective**: Rotate the yellow corner pieces so that all yellow stickers are on the top face, fully solving the cube.

### Understanding the Task

Now, each corner is in its correct position but may be twisted. Your goal is to rotate each corner individually without disturbing the rest of the cube.

### Visualization

- **Corner Twisting**: Imagine each corner as a screw that needs to be turned to face the right direction.

### Step-by-Step Process

1. **Hold the Cube Properly**:
   - Keep the yellow face on top.
   - Position a misoriented corner at the front-right-top corner.

2. **Apply the Algorithm**:
   - **Algorithm**: R' D' R D
   - Repeat this sequence until the corner is correctly oriented (usually 2 or 4 times).

3. **Important Notes**:
   - **Do Not Rotate the Entire Cube**: Only rotate the faces as specified.
   - **The Rest of the Cube Will Appear Scrambled**: Don't worry; it will resolve once all corners are oriented.

4. **Move to the Next Corner**:
   - After the corner is correctly oriented, rotate the top layer (U move) to bring the next misoriented corner to the front-right-top position.
   - Repeat the algorithm for each misoriented corner.

5. **Final Adjustment**:
   - Once all corners are oriented, rotate the top layer as needed to realign the cube.

### Key Insights

- **Algorithm Mechanics**:
  - The algorithm rotates the corner in place while temporarily disrupting other pieces, which are restored as you complete the process.
- **Patience is Crucial**:
  - The cube may look unsolved during this step, but trust the process.

### Tips

- **Focus on One Corner at a Time**: This prevents confusion and ensures accuracy.
- **Maintain the Cube's Orientation**: Always keep the yellow face on top and avoid turning the whole cube.

By the end of this step, all yellow corners should be correctly oriented, and the Rubik's Cube will be fully solved.
    `,
  },
  {
    title: 'Conclusion: Mastery Through Understanding and Its Application in Life',
    description: `
**Congratulations!** You've not only solved the Rubik's Cube but also gained a profound understanding of its mechanics through the Feynman Technique.

### Reflecting on the Journey

- **Deep Understanding**: By dissecting each step and visualizing the cube's transformations, you've moved beyond rote memorization.
- **Problem-Solving Skills**: This process has enhanced your ability to tackle complex problems methodically.

### Applying These Principles Beyond the Cube

- **Academic Pursuits**: Use this approach to break down complex theories into understandable concepts.
- **Personal Growth**: Embrace challenges as opportunities to deepen your understanding.
- **Teaching Others**: Explaining concepts to others reinforces your knowledge and contributes to their learning.

### Visualization and Mindfulness

- **Mental Mapping**: The practice of visualizing each move sharpens your cognitive abilities.
- **Patience and Persistence**: Overcoming obstacles on the cube mirrors life's challenges, teaching resilience.

### Final Thoughts

Mastery comes from understanding the 'why' behind the 'how.' By applying the Feynman Technique to the Rubik's Cube, you've unlocked a powerful method for learning anything deeply.

**Keep Exploring**: Let this experience inspire you to delve into new subjects with curiosity and confidence.
    `,
  },
];

function StepList() {
  return (
    <div className="step-list">
      {steps.map((step, index) => (
        <Step key={index} step={step} />
      ))}
    </div>
  );
}

export default StepList;