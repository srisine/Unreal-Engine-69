#version 330 core
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec2 aTex;

out float Height;
out vec3 Position;

uniform mat4 model;
uniform mat4 view;
uniform mat4 proj;

out vec2 TexCoord;


void main()
{
    Height = aPos.y;
    Position = (view * model * vec4(aPos, 1.0)).xyz;
    gl_Position = proj * view * model * vec4(aPos, 1.0);
    TexCoord = aTex;
}