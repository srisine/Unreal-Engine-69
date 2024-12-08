#ifndef VBO_CLASS_H
#define VBO_CLASS_H

#include <glad/glad.h>

class VBO
{
public:
	GLuint ID;

	VBO(GLfloat* verticies, GLsizeiptr size);

	void Bind();

	void UnBind();

	void Delete();
};

#endif