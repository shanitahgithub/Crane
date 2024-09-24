# # # Use the official Python images
# # FROM python:3.12-slim

# # # Set environment variables
# # ENV PYTHONDONTWRITEBYTECODE 1
# # ENV PYTHONUNBUFFERED 1

# # # Set the working directorys
# # WORKDIR /My_Project

# # # Install dependencies
# # COPY requirements.txt .
# # RUN pip install -r requirements.txt

# # # Copy the application codes
# # COPY . .

# # EXPOSE 5000

# # # Run migrations and start the app
# # CMD ["guinicorn","-b","0.0.0.0:5000","My_Project:create_app()"]


# Use the official Python images
FROM python:3.12-slim

# Set environment variabless
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directoryy
WORKDIR /app

# # Install Python dependencies
COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt


# Install dependencies
COPY requirements.txt .
RUN pip install -r requirements.txt

# Copy the application codee
COPY . .

EXPOSE 5000

# Run migrations and start the app
CMD ["gunicorn", "-b", "0.0.0.0:5000", "restaurant_app:create_app()"]


# # Use the official Python images
# FROM python:3.12-slim

# # Set environment variables
# ENV PYTHONDONTWRITEBYTECODE 1
# ENV PYTHONUNBUFFERED 1

# # Set the working directory
# WORKDIR /My_Project

# # Install dependencies
# COPY requirements.txt .
# RUN pip install -r requirements.txt

# # Copy the application code
# COPY . .

# EXPOSE 5000

# # Run migrations and start the app
# CMD ["waitress-serve", "--host", "0.0.0.0", "--port", "5000", "restaurant_app:create_app"]



# # Use the official Python images
# FROM python:3.12-slim

# # Set environment variables
# ENV PYTHONDONTWRITEBYTECODE=1
# ENV PYTHONUNBUFFERED=1

# # # Install system dependencies (optional but recommended for common issues)
# # RUN apt-get update && apt-get install -y \
# #     gcc \
# #     libpq-dev \
# #     && rm -rf /var/lib/apt/lists/*

# # Set the working directory
# WORKDIR /app

# # Install Python dependencies
# COPY requirements.txt .
# RUN pip install --no-cache-dir -r requirements.txt

# # Copy the application code
# COPY . .

# # Expose the port for the app
# EXPOSE 5000

# # Start the application using Waitress
# CMD ["waitress-serve", "--host=0.0.0.0", "--port=5000", "restaurant_app:create_app"]
