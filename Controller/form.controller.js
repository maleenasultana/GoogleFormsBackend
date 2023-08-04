const { createForm, getForm, editForm, createResponse, getResponse } = require('../Service/form.service');

const insertForm = async(req, res) => {
    try{
        const userId = res.locals.userId;
        const body = req.body;
        const form = await createForm(body, userId);
        res.send(form);
    }
    catch (error) {
        res.send(error);
    }
};

const selectForms = async(req, res) => {
    try{
        const userId = res.locals.userId;
        const formId = req.query.formId;
        const form = await getForm(userId, formId);
        res.send(form);
    }
    catch (error) {
        res.send(error);
    }
}

const updateForms = async(req, res) => {
    try{
        const userId = res.locals.userId;
        const formData = req.body.formData;
        const heading = req.body.heading;
        const formId = req.body.formId;
        const form = await editForm(formId, formData, userId, heading);
        res.send(form);
    }
    catch (error) {
        res.send(error);
    }
}

const insertResponse = async(req, res) => {
    try{
        const userId = res.locals.userId;
        const formData = req.body.formData;
        const formId = req.body.formId;
        const form = await createResponse(formData, formId, userId);
        res.send(form);
    }
    catch (error) {
        res.send(error);
    }
};

const selectResponses = async(req, res) => {
    try{
        const userId = res.locals.userId;
        const formId = req.query.formId;
        const form = await getResponse(userId, formId);
        res.send(form);
    }
    catch (error) {
        res.send(error);
    }
}

module.exports = {
    insertForm,
    selectForms,
    updateForms,
    insertResponse,
    selectResponses
}