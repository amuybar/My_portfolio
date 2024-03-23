import { createClient } from '@supabase/supabase-js';
import supabaseConfig from './config';

const { supabaseUrl, supabaseKey } = supabaseConfig;
const supabase = createClient(supabaseUrl, supabaseKey);

// Functions for CRUD operations

// Function to fetch all blog posts
async function fetchBlogPosts() {
    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .select('*');
        if (error) {
            throw error;
        }
        return data;
    } catch (error) {
        console.error('Error fetching blog posts:', error.message);
        return [];
    }
}

// Function to create a new blog post
async function createBlogPost(title, content, userId) {
    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .insert([{ title, content, user_id: userId }]);
        if (error) {
            throw error;
        }
        return data[0];
    } catch (error) {
        console.error('Error creating blog post:', error.message);
        return null;
    }
}

// Function to update an existing blog post
async function updateBlogPost(postId, updates) {
    try {
        const { data, error } = await supabase
            .from('blog_posts')
            .update(updates)
            .eq('id', postId);
        if (error) {
            throw error;
        }
        return data[0];
    } catch (error) {
        console.error('Error updating blog post:', error.message);
        return null;
    }
}

// Function to delete a blog post
async function deleteBlogPost(postId) {
    try {
        const { error } = await supabase
            .from('blog_posts')
            .delete()
            .eq('id', postId);
        if (error) {
            throw error;
        }
        return true;
    } catch (error) {
        console.error('Error deleting blog post:', error.message);
        return false;
    }
}

export { fetchBlogPosts, createBlogPost, updateBlogPost, deleteBlogPost ,supabase};
