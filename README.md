# Robot Performance Analyzer

## Overview
Robot Performance Analyzer is a tool designed to analyze and optimize the performance of Robot Framework test cases. It provides insights into bottlenecks, execution times, and other performance metrics to help improve the efficiency of your test automation.

## Features
- **Bottleneck Detection**: Identify slow-running keywords and test cases.
- **Output Analysis**: Analyze Robot Framework output files for performance metrics.
- **Robot Parser**: Parse Robot Framework test cases and logs for detailed insights.
- **Decoration Provider**: Visualize performance data directly in your editor.

## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/DarmawanRobby/robot-performance-analyzer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd robot-performance-analyzer
   ```
3. Install dependencies:
   ```bash
   npm install
   ```

## Usage
1. Build the extension:
   ```bash
   npm run build
   ```
2. Package the extension:
   ```bash
   vsce package
   ```
3. Install the extension in VS Code:
   ```bash
   code --install-extension robot-performance-analyzer-<version>.vsix
   ```

## Folder Structure
- `src/`
  - `extension.ts`: Entry point for the VS Code extension.
  - `analyzers/`
    - `bottleneckDetector.ts`: Detects performance bottlenecks.
    - `outputAnalyzer.ts`: Analyzes Robot Framework output files.
    - `robotParser.ts`: Parses Robot Framework test cases and logs.
  - `providers/`
    - `decorationProvider.ts`: Provides decorations for performance data visualization.

## Contributing
1. Fork the repository.
2. Create a new branch:
   ```bash
   git checkout -b feature/your-feature-name
   ```
3. Commit your changes:
   ```bash
   git commit -m "Add your message here"
   ```
4. Push to the branch:
   ```bash
   git push origin feature/your-feature-name
   ```
5. Open a pull request.

## License
This project is licensed under the MIT License. See the [LICENSE.md](LICENSE.md) file for details.

## Acknowledgments
- Thanks to the Robot Framework community for their amazing tools and support.
- Inspired by the need for better performance analysis in test automation.
