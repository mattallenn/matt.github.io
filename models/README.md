# 3D Models Directory

This directory contains 3D model files for the Chessmate project.

## Supported Formats

- **GLTF/GLB (Recommended)**: Best for web, smaller file sizes, supports materials
- **STL**: Also supported, but larger files

## Required Files

The 3D viewer will automatically look for these files:

1. **Gripper Model:**
   - `gripper.glb` (preferred) or `gripper.stl`

2. **Chess Piece Model:**
   - `chess-piece.glb` (preferred) or `chess-piece.stl`

## How to Add Models

1. Export your 3D models from your CAD software (AutoDesk Inventor, Blender, etc.)
2. If exporting as STL, consider converting to GLTF/GLB for better web performance
3. Place the files in this directory with the exact names listed above
4. The viewer will automatically detect and load them

## Converting STL to GLTF/GLB

You can use:
- **Blender**: Import STL, then export as GLTF/GLB
- **Online converters**: Various free online tools available
- **Command line**: Using tools like `assimp` or `gltf-pipeline`

