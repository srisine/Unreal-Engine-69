#version 330 core

out vec4 FragColor;

in float Height;

void main()
{
    float h = (Height + 16)/32.0f;	// shift and scale the height into a grayscale value
    if (h <= 0.7f)
    {
        FragColor = vec4(0.17 * h, 1.00 * h, 0.00 * h, 1.0);
    }
    else if(h <= 1.0f)
    {
        FragColor = vec4(0.63 * h, 1.00 * h, 0.32 * h, 1.0);
    }
    else
    {
        FragColor = vec4(0.79 * h, 0.99 * h, 0.61 * h, 1.0);
    }
}